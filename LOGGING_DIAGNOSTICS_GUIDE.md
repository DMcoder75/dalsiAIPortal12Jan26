# Logging Diagnostics Guide

## Overview

The logging diagnostics system provides real-time monitoring and troubleshooting tools to verify that API call logging is working correctly. If logging fails again, you can use these tools to quickly diagnose the issue.

## Quick Diagnostics (Browser Console)

### 1. **Print Diagnostics Report**
```javascript
window.loggingDiagnostics.print()
```
Shows a formatted table with:
- Total logging attempts
- Successful logs
- Failed logs
- Pending logs
- Success rate percentage
- Recent errors
- Recent log entries

### 2. **Get Success Rate**
```javascript
window.loggingDiagnostics.getSuccessRate()
```
Returns the percentage of successful logging attempts. Should be close to 100%.

**Expected:** `99.50` (or higher)
**Problem:** If below 50%, logging is failing

### 3. **Run Health Check**
```javascript
window.loggingDiagnostics.health()
```
Automatically checks:
- ✅ Diagnostics enabled
- ✅ Logging attempts recorded
- ✅ Success rate above 50%
- ✅ No pending logs stuck
- ✅ No recent errors

**Status Levels:**
- `healthy` - Everything working fine
- `warning` - Issues detected but not critical
- `critical` - Logging is failing

### 4. **Export Diagnostics**
```javascript
window.loggingDiagnostics.export()
```
Downloads a JSON file with complete diagnostics data for analysis.

## Detailed Diagnostics

### 5. **Get All Statistics**
```javascript
window.loggingDiagnostics.getStats()
```
Returns:
```javascript
{
  total_attempts: 15,
  successful_logs: 15,
  failed_logs: 0,
  pending_logs: 0,
  errors: []
}
```

### 6. **Get All Logs**
```javascript
window.loggingDiagnostics.getLogs()
```
Returns array of all logging attempts with timestamps, status, and details.

### 7. **Get Full Diagnostics Object**
```javascript
window.loggingDiagnostics.getDiagnostics()
```
Returns complete diagnostics including:
- Timestamp
- Statistics
- Recent logs (last 10)
- Recent errors (last 5)
- All logs

## Troubleshooting Steps

### Scenario 1: Logging Not Happening at All

**Step 1: Check if logs are being recorded**
```javascript
window.loggingDiagnostics.getLogs().length
```
Should return > 0 after sending a message. If 0:
- Component initialization failed
- Logging functions not imported
- Chat not actually making API calls

**Step 2: Check browser console for errors**
Look for messages like:
- `❌ Error logging API call:`
- `⚠️ Missing required fields:`
- `❌ Error initializing guest user:`

**Step 3: Verify guest user initialization**
```javascript
// Check if guest user ID was fetched
window.loggingDiagnostics.getLogs()
  .filter(log => log.type === 'attempt')
  .map(log => ({ user_id: log.user_id, endpoint: log.endpoint }))
```

### Scenario 2: Logs Recorded but Not in Database

**Step 1: Check success rate**
```javascript
window.loggingDiagnostics.getSuccessRate()
```
If below 50%, database inserts are failing.

**Step 2: Check recent errors**
```javascript
window.loggingDiagnostics.getDiagnostics().recent_errors
```
Look for error messages like:
- `VALIDATION_ERROR` - Missing required fields
- `DATABASE_ERROR` - Supabase connection issue
- `UNEXPECTED_ERROR` - Unexpected exception

**Step 3: Check Supabase connection**
```javascript
// Try to query the guest user
const { data, error } = await supabase
  .from('users')
  .select('id')
  .eq('email', 'dalsiainoreply@gmail.com')
  .maybeSingle()

console.log('Guest user:', data)
console.log('Error:', error)
```

### Scenario 3: High Failure Rate

**Step 1: Export diagnostics**
```javascript
window.loggingDiagnostics.export()
```
This downloads a JSON file with all details.

**Step 2: Check error patterns**
```javascript
const diag = window.loggingDiagnostics.getDiagnostics()
const errorTypes = {}
diag.recent_errors.forEach(err => {
  errorTypes[err.error] = (errorTypes[err.error] || 0) + 1
})
console.table(errorTypes)
```

**Step 3: Check specific error**
```javascript
// Get the most recent error
const lastError = window.loggingDiagnostics.getDiagnostics().recent_errors[0]
console.log('Last error:', lastError)
```

## Common Issues and Solutions

### Issue 1: "Missing required fields"
**Cause:** `guestUserId` or `clientIp` not initialized
**Solution:**
```javascript
// Check if values are set
console.log('Guest User ID:', window.guestUserId)
console.log('Client IP:', window.clientIp)
```
If undefined, check browser console for initialization errors.

### Issue 2: "Failed to insert log into database"
**Cause:** Supabase connection issue or table doesn't exist
**Solution:**
```javascript
// Verify table exists
const { data, error } = await supabase
  .from('api_usage_logs')
  .select('count', { count: 'exact' })
  .limit(1)

console.log('Table exists:', !error)
console.log('Error:', error)
```

### Issue 3: "Unexpected error in API logging"
**Cause:** Exception in logging code
**Solution:**
```javascript
// Get the full error details
const lastLog = window.loggingDiagnostics.getLogs().pop()
console.log('Last log details:', lastLog)
```

## Monitoring in Production

### Enable Auto-Monitoring
```javascript
// Check health every 30 seconds
setInterval(() => {
  const health = window.loggingDiagnostics.health()
  if (health.status !== 'healthy') {
    console.warn('⚠️ Logging health issue:', health)
  }
}, 30000)
```

### Set Up Alerts
```javascript
// Alert if success rate drops below 80%
setInterval(() => {
  const rate = parseFloat(window.loggingDiagnostics.getSuccessRate())
  if (rate < 80) {
    console.error('🚨 ALERT: Logging success rate dropped to ' + rate + '%')
    // Send alert to monitoring service
  }
}, 60000)
```

### Regular Health Checks
```javascript
// Run health check and log results
const health = window.loggingDiagnostics.health()
console.log('Health Status:', health.status)
console.log('Issues:', health.issues)
```

## Database Verification

### Check Logs in Supabase

```sql
-- Count total logs
SELECT COUNT(*) as total_logs FROM public.api_usage_logs;

-- Check logs for guest user
SELECT * FROM public.api_usage_logs 
WHERE user_id = '640c26ce-6541-42c3-b369-f4f75faeab7d'
ORDER BY created_at DESC
LIMIT 10;

-- Check logs by IP address
SELECT ip_address, COUNT(*) as count, MAX(created_at) as last_log
FROM public.api_usage_logs
GROUP BY ip_address
ORDER BY count DESC;

-- Check for errors
SELECT * FROM public.api_usage_logs
WHERE error_message IS NOT NULL
ORDER BY created_at DESC
LIMIT 10;

-- Check success rate by endpoint
SELECT endpoint, 
  COUNT(*) as total,
  COUNT(CASE WHEN error_message IS NULL THEN 1 END) as successful,
  ROUND(100.0 * COUNT(CASE WHEN error_message IS NULL THEN 1 END) / COUNT(*), 2) as success_rate
FROM public.api_usage_logs
GROUP BY endpoint;
```

## Commands Reference

| Command | Purpose |
|---------|---------|
| `window.loggingDiagnostics.print()` | Print formatted diagnostics report |
| `window.loggingDiagnostics.export()` | Export diagnostics as JSON file |
| `window.loggingDiagnostics.health()` | Run health check |
| `window.loggingDiagnostics.reset()` | Reset all diagnostics data |
| `window.loggingDiagnostics.enable()` | Enable diagnostics |
| `window.loggingDiagnostics.disable()` | Disable diagnostics |
| `window.loggingDiagnostics.getSuccessRate()` | Get success rate % |
| `window.loggingDiagnostics.getStats()` | Get statistics object |
| `window.loggingDiagnostics.getLogs()` | Get all logs array |
| `window.loggingDiagnostics.getDiagnostics()` | Get full diagnostics object |
| `window.loggingDiagnostics.help()` | Show help message |

## Quick Diagnostics Checklist

When logging seems broken, run these in order:

```javascript
// 1. Check if diagnostics are working
window.loggingDiagnostics.print()

// 2. Check success rate
console.log('Success Rate:', window.loggingDiagnostics.getSuccessRate() + '%')

// 3. Run health check
window.loggingDiagnostics.health()

// 4. Check recent errors
console.log('Recent Errors:', window.loggingDiagnostics.getDiagnostics().recent_errors)

// 5. Export for analysis
window.loggingDiagnostics.export()

// 6. Check database
// Run SQL queries in Supabase console to verify logs are being saved
```

## Support

If logging is still not working after diagnostics:

1. **Export diagnostics** - `window.loggingDiagnostics.export()`
2. **Check browser console** - Look for error messages
3. **Check Supabase logs** - Verify table exists and has data
4. **Review error messages** - Most recent errors show in diagnostics
5. **Check network tab** - Verify API requests are being made
6. **Verify credentials** - Ensure Supabase keys are correct

## Summary

The logging diagnostics system provides:
- ✅ Real-time monitoring of logging attempts
- ✅ Success/failure tracking
- ✅ Automatic health checks
- ✅ Error logging and analysis
- ✅ Easy export for debugging
- ✅ Browser console commands for quick checks
- ✅ Database verification queries

Use these tools to quickly identify and fix any logging issues!
