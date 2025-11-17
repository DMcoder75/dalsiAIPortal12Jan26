# Guest User Logging Implementation Guide

## Overview
This guide explains how to integrate guest user logging into the EnhancedChatInterface component to track all guest API calls with IP address and browser fingerprint.

## Components Already Implemented

### 1. **apiLogging.js Service** ✅
Located at: `src/services/apiLogging.js`

**Functions available:**
- `getClientIp()` - Fetches client IP or generates guest identifier
- `getGuestIdentifier()` - Generates browser fingerprint-based identifier
- `logChatApiCall()` - Logs chat API calls for authenticated users
- `logGuestApiCall()` - Logs guest API calls
- `getUserApiStats()` - Gets user API statistics
- `getGuestApiStatsByIp()` - Gets guest statistics by IP/identifier

### 2. **Guest User in Database** ✅
- Email: `dalsiainoreply@gmail.com`
- User ID: `640c26ce-6541-42c3-b369-f4f75faeab7d`
- API Key: `sk-guest-0f11949...` (generated)
- Rate limits: 60/min, 1000/hour, 10000/day

## Integration Steps

### Step 1: Add Imports to EnhancedChatInterface.jsx
```javascript
import { logChatApiCall, logGuestApiCall, getClientIp } from '../services/apiLogging'
```

### Step 2: Add State Variables
```javascript
const [guestUserId, setGuestUserId] = useState(null)
const [clientIp, setClientIp] = useState(null)
```

### Step 3: Add Helper Function
Add this function before the `checkUser` function:
```javascript
const initializeGuestUser = async () => {
 try {
  console.log('🔍 Initializing guest user...')
  // Fetch the guest user record (email: dalsiainoreply@gmail.com)
  const { data: guestUser, error } = await supabase
   .from('users')
   .select('id')
   .eq('email', 'dalsiainoreply@gmail.com')
   .maybeSingle()
  
  console.log('Guest user query result:', { guestUser, error })
  
  if (error) {
   console.error('❌ Error fetching guest user:', error)
   return
  }
  
  if (guestUser) {
   setGuestUserId(guestUser.id)
   console.log('✅ Guest user ID loaded:', guestUser.id)
  } else {
   console.warn('⚠️ Guest user not found in database')
  }
 } catch (error) {
  console.error('❌ Error initializing guest user:', error)
 }
}
```

### Step 4: Initialize Guest User and IP in useEffect
Update the initialization effect to:
```javascript
useEffect(() => {
 const initializeChat = async () => {
  console.log('🚀 Starting chat initialization...')
  await checkUser()
  await loadAvailableModels()
  await checkAPIHealth()
  
  // Fetch client IP address for guest tracking
  console.log('🌐 Fetching client IP address...')
  const ip = await getClientIp()
  console.log('IP fetch result:', ip)
  if (ip) {
   setClientIp(ip)
   console.log('📍 Client IP captured:', ip)
  } else {
   console.warn('⚠️ Could not fetch client IP')
  }
  
  // Fetch or create guest user ID for logging
  if (!user) {
   console.log('🔍 User not authenticated, initializing guest user...')
   await initializeGuestUser()
  } else {
   console.log('✅ User authenticated:', user.email)
  }
  
  // ... rest of initialization code
 }
 
 initializeChat()
}, [user])
```

### Step 5: Add Logging to API Calls
After each API call (where you get the response), add logging:

**For authenticated users:**
```javascript
// After successful API call
await logChatApiCall({
  endpoint: '/dalsiai/generate',
  userId: user.id,
  apiKeyId: user.api_key_id,
  tokensUsed: response.tokens_used || 0,
  cost: response.cost_usd || 0,
  subscriptionTier: userSubscription?.tier || 'free',
  responseTime: Date.now() - startTime,
  statusCode: 200,
  ipAddress: clientIp,
  metadata: {
    model: selectedModel,
    messageLength: inputMessage.length,
    responseLength: response.text?.length || 0,
    sessionId: currentChatId
  }
})
```

**For guest users:**
```javascript
// After successful API call for guest
await logGuestApiCall({
  guestUserId: guestUserId,
  endpoint: '/dalsiai/generate',
  tokensUsed: response.tokens_used || 0,
  cost: response.cost_usd || 0,
  responseTime: Date.now() - startTime,
  statusCode: 200,
  ipAddress: clientIp,
  metadata: {
    model: selectedModel,
    messageLength: inputMessage.length,
    responseLength: response.text?.length || 0,
    sessionId: currentChatId
  }
})
```

**For errors:**
```javascript
// After error
if (user) {
  await logChatApiCall({
    endpoint: '/dalsiai/generate',
    userId: user.id,
    apiKeyId: user.api_key_id,
    responseTime: Date.now() - startTime,
    statusCode: error.status || 500,
    errorMessage: error.message,
    ipAddress: clientIp
  })
} else {
  await logGuestApiCall({
    guestUserId: guestUserId,
    endpoint: '/dalsiai/generate',
    responseTime: Date.now() - startTime,
    statusCode: error.status || 500,
    errorMessage: error.message,
    ipAddress: clientIp
  })
}
```

## Testing

1. **Open the chat in a fresh browser** (incognito/private mode recommended)
2. **Check browser console** for initialization logs:
   - "🚀 Starting chat initialization..."
   - "🌐 Fetching client IP address..."
   - "✅ Guest user ID loaded: 640c26ce-6541-42c3-b369-f4f75faeab7d"
   - "📍 Client IP captured: [IP or guest_identifier]"

3. **Send a test message** and verify:
   - Response is received
   - No errors in console
   - Check Supabase `api_usage_logs` table for new entry with:
     - `user_id`: 640c26ce-6541-42c3-b369-f4f75faeab7d
     - `ip_address`: Client IP or guest identifier
     - `endpoint`: /dalsiai/generate
     - `status_code`: 200

## Debugging

If logging doesn't work:

1. **Check guest user exists:**
   ```sql
   SELECT id, email FROM public.users WHERE email = 'dalsiainoreply@gmail.com';
   ```

2. **Check API key exists:**
   ```sql
   SELECT id, key_prefix, is_active FROM public.api_keys WHERE user_id = '640c26ce-6541-42c3-b369-f4f75faeab7d';
   ```

3. **Check console for errors:**
   - Open browser DevTools (F12)
   - Look for error messages in Console tab
   - Check if `guestUserId` and `clientIp` are being set

4. **Verify Supabase connection:**
   - Check if `supabase` client is properly initialized
   - Verify VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set

## Database Schema

The `api_usage_logs` table captures:
- `id` - Unique identifier
- `user_id` - User ID (guest or authenticated)
- `api_key_id` - API key used (null for guests)
- `endpoint` - API endpoint called
- `method` - HTTP method
- `status_code` - Response status
- `response_time_ms` - Response time
- `tokens_used` - Tokens consumed
- `cost_usd` - Cost in USD
- `ip_address` - Client IP or guest identifier
- `error_message` - Error message if any
- `request_metadata` - Additional metadata (JSONB)
- `created_at` - Timestamp

## Summary

✅ **Completed:**
- Guest user created in database
- API key generated for guest user
- apiLogging.js service with all functions
- Guest identifier fallback (browser fingerprint)
- IP fetching with timeout and error handling

⏳ **Pending:**
- Integration into EnhancedChatInterface component
- Logging calls at API call points
- Testing and verification

Once you integrate the logging calls into the component, all guest API usage will be automatically tracked and stored in the database.
