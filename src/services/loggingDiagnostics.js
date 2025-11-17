/**
 * Logging Diagnostics Service
 * 
 * Provides comprehensive tools to diagnose and monitor API logging
 * Tracks all logging attempts, successes, and failures
 * Helps identify issues with logging in real-time
 */

class LoggingDiagnostics {
  constructor() {
    this.logs = [];
    this.stats = {
      total_attempts: 0,
      successful_logs: 0,
      failed_logs: 0,
      pending_logs: 0,
      errors: []
    };
    this.isEnabled = true;
    this.maxLogs = 100; // Keep last 100 log attempts
  }

  /**
   * Record a logging attempt
   */
  recordAttempt(data) {
    if (!this.isEnabled) return;

    const attempt = {
      timestamp: new Date().toISOString(),
      type: 'attempt',
      user_id: data.user_id,
      endpoint: data.endpoint,
      method: data.method,
      status: 'pending',
      details: data
    };

    this.logs.push(attempt);
    this.stats.total_attempts++;
    this.stats.pending_logs++;

    // Keep only last N logs
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    console.log('📊 [DIAGNOSTICS] Logging attempt recorded:', {
      user_id: data.user_id,
      endpoint: data.endpoint,
      total_attempts: this.stats.total_attempts,
      pending: this.stats.pending_logs
    });

    return attempt;
  }

  /**
   * Record successful logging
   */
  recordSuccess(data) {
    if (!this.isEnabled) return;

    const success = {
      timestamp: new Date().toISOString(),
      type: 'success',
      user_id: data.user_id,
      endpoint: data.endpoint,
      status: 'success',
      response_id: data.response_id,
      details: data
    };

    this.logs.push(success);
    this.stats.successful_logs++;
    this.stats.pending_logs = Math.max(0, this.stats.pending_logs - 1);

    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    console.log('✅ [DIAGNOSTICS] Logging successful:', {
      user_id: data.user_id,
      endpoint: data.endpoint,
      successful: this.stats.successful_logs,
      success_rate: this.getSuccessRate()
    });

    return success;
  }

  /**
   * Record logging failure
   */
  recordFailure(data) {
    if (!this.isEnabled) return;

    const failure = {
      timestamp: new Date().toISOString(),
      type: 'failure',
      user_id: data.user_id,
      endpoint: data.endpoint,
      status: 'failed',
      error: data.error,
      error_message: data.error_message,
      details: data
    };

    this.logs.push(failure);
    this.stats.failed_logs++;
    this.stats.pending_logs = Math.max(0, this.stats.pending_logs - 1);
    this.stats.errors.push({
      timestamp: new Date().toISOString(),
      error: data.error_message,
      user_id: data.user_id
    });

    // Keep only last 20 errors
    if (this.stats.errors.length > 20) {
      this.stats.errors.shift();
    }

    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    console.error('❌ [DIAGNOSTICS] Logging failed:', {
      user_id: data.user_id,
      endpoint: data.endpoint,
      error: data.error_message,
      failed_count: this.stats.failed_logs,
      success_rate: this.getSuccessRate()
    });

    return failure;
  }

  /**
   * Get success rate percentage
   */
  getSuccessRate() {
    if (this.stats.total_attempts === 0) return 0;
    return ((this.stats.successful_logs / this.stats.total_attempts) * 100).toFixed(2);
  }

  /**
   * Get all diagnostics data
   */
  getDiagnostics() {
    return {
      timestamp: new Date().toISOString(),
      enabled: this.isEnabled,
      statistics: {
        total_attempts: this.stats.total_attempts,
        successful_logs: this.stats.successful_logs,
        failed_logs: this.stats.failed_logs,
        pending_logs: this.stats.pending_logs,
        success_rate: this.getSuccessRate() + '%',
        error_count: this.stats.errors.length
      },
      recent_logs: this.logs.slice(-10), // Last 10 logs
      recent_errors: this.stats.errors.slice(-5), // Last 5 errors
      all_logs: this.logs
    };
  }

  /**
   * Print diagnostics to console in a formatted way
   */
  printDiagnostics() {
    const diag = this.getDiagnostics();
    
    console.group('🔍 LOGGING DIAGNOSTICS REPORT');
    console.log('Timestamp:', diag.timestamp);
    console.log('Enabled:', diag.enabled);
    
    console.group('📊 Statistics');
    console.table(diag.statistics);
    console.groupEnd();

    if (diag.recent_errors.length > 0) {
      console.group('⚠️ Recent Errors');
      console.table(diag.recent_errors);
      console.groupEnd();
    }

    console.group('📝 Recent Logs');
    console.table(diag.recent_logs);
    console.groupEnd();

    console.groupEnd();
  }

  /**
   * Export diagnostics as JSON
   */
  exportDiagnostics() {
    const diag = this.getDiagnostics();
    const json = JSON.stringify(diag, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `logging-diagnostics-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('📥 Diagnostics exported as JSON');
    return json;
  }

  /**
   * Check if logging is working properly
   */
  healthCheck() {
    const health = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      issues: []
    };

    // Check if diagnostics are enabled
    if (!this.isEnabled) {
      health.status = 'warning';
      health.issues.push('Diagnostics are disabled');
    }

    // Check if no attempts have been made
    if (this.stats.total_attempts === 0) {
      health.status = 'warning';
      health.issues.push('No logging attempts recorded yet');
    }

    // Check success rate
    const successRate = parseFloat(this.getSuccessRate());
    if (successRate < 50 && this.stats.total_attempts > 5) {
      health.status = 'critical';
      health.issues.push(`Low success rate: ${successRate}%`);
    }

    // Check for pending logs
    if (this.stats.pending_logs > 5) {
      health.status = 'warning';
      health.issues.push(`${this.stats.pending_logs} logs still pending`);
    }

    // Check for recent errors
    if (this.stats.errors.length > 0) {
      const recentError = this.stats.errors[this.stats.errors.length - 1];
      const timeSinceError = Date.now() - new Date(recentError.timestamp).getTime();
      if (timeSinceError < 60000) { // Within last minute
        health.status = 'warning';
        health.issues.push(`Recent error: ${recentError.error}`);
      }
    }

    console.log('🏥 [DIAGNOSTICS] Health Check:', health);
    return health;
  }

  /**
   * Reset diagnostics
   */
  reset() {
    this.logs = [];
    this.stats = {
      total_attempts: 0,
      successful_logs: 0,
      failed_logs: 0,
      pending_logs: 0,
      errors: []
    };
    console.log('🔄 [DIAGNOSTICS] Diagnostics reset');
  }

  /**
   * Enable/disable diagnostics
   */
  setEnabled(enabled) {
    this.isEnabled = enabled;
    console.log(`[DIAGNOSTICS] ${enabled ? 'Enabled' : 'Disabled'}`);
  }
}

// Create singleton instance
export const loggingDiagnostics = new LoggingDiagnostics();

// Initialize immediately
console.log('📊 [DIAGNOSTICS] Logging diagnostics service initialized');

/**
 * Expose diagnostics to window for easy access in browser console
 */
if (typeof window !== 'undefined') {
  console.log('📊 [DIAGNOSTICS] Exposing diagnostics to window object');
  window.loggingDiagnostics = {
    // Get current diagnostics
    getDiagnostics: () => loggingDiagnostics.getDiagnostics(),
    
    // Print formatted report
    print: () => loggingDiagnostics.printDiagnostics(),
    
    // Export as JSON file
    export: () => loggingDiagnostics.exportDiagnostics(),
    
    // Health check
    health: () => loggingDiagnostics.healthCheck(),
    
    // Reset diagnostics
    reset: () => loggingDiagnostics.reset(),
    
    // Enable/disable
    enable: () => loggingDiagnostics.setEnabled(true),
    disable: () => loggingDiagnostics.setEnabled(false),
    
    // Get success rate
    getSuccessRate: () => loggingDiagnostics.getSuccessRate(),
    
    // Get stats
    getStats: () => loggingDiagnostics.stats,
    
    // Get all logs
    getLogs: () => loggingDiagnostics.logs,
    
    // Help
    help: () => {
      console.log(`
🔍 LOGGING DIAGNOSTICS COMMANDS:
================================

window.loggingDiagnostics.getDiagnostics()  - Get all diagnostics data
window.loggingDiagnostics.print()           - Print formatted report
window.loggingDiagnostics.export()          - Export as JSON file
window.loggingDiagnostics.health()          - Run health check
window.loggingDiagnostics.reset()           - Reset all data
window.loggingDiagnostics.enable()          - Enable diagnostics
window.loggingDiagnostics.disable()         - Disable diagnostics
window.loggingDiagnostics.getSuccessRate()  - Get success rate %
window.loggingDiagnostics.getStats()        - Get statistics
window.loggingDiagnostics.getLogs()         - Get all logs
window.loggingDiagnostics.help()            - Show this help

QUICK DIAGNOSTICS:
==================
1. Open browser DevTools (F12)
2. Go to Console tab
3. Run: window.loggingDiagnostics.print()
4. Check success rate and recent errors
5. If issues, run: window.loggingDiagnostics.export()
6. Share exported JSON file for analysis
      `);
    }
  };
}
