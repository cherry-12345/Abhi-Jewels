// Comprehensive error handling and logging
export interface ErrorLog {
  id: string
  timestamp: string
  level: 'error' | 'warn' | 'info'
  message: string
  stack?: string
  userId?: string
  url?: string
  userAgent?: string
}

class ErrorHandler {
  private logs: ErrorLog[] = []
  private maxLogs = 1000

  log(level: ErrorLog['level'], message: string, error?: Error, context?: any) {
    const errorLog: ErrorLog = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      level,
      message,
      stack: error?.stack,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      ...context
    }

    this.logs.push(errorLog)
    
    // Keep only recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }

    // Console logging in development
    if (process.env.NODE_ENV === 'development') {
      console[level](message, error, context)
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production' && level === 'error') {
      this.sendToMonitoring(errorLog)
    }
  }

  error(message: string, error?: Error, context?: any) {
    this.log('error', message, error, context)
  }

  warn(message: string, context?: any) {
    this.log('warn', message, undefined, context)
  }

  info(message: string, context?: any) {
    this.log('info', message, undefined, context)
  }

  getLogs(level?: ErrorLog['level']): ErrorLog[] {
    return level ? this.logs.filter(log => log.level === level) : this.logs
  }

  clearLogs() {
    this.logs = []
  }

  private async sendToMonitoring(errorLog: ErrorLog) {
    try {
      // In production, send to monitoring service like Sentry, LogRocket, etc.
      await fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorLog)
      })
    } catch (err) {
      console.error('Failed to send error to monitoring:', err)
    }
  }
}

export const errorHandler = new ErrorHandler()

// Global error boundary
export const handleGlobalError = (error: Error, errorInfo?: any) => {
  errorHandler.error('Global error caught', error, errorInfo)
}

// Async error wrapper
export const withErrorHandling = <T extends (...args: any[]) => any>(
  fn: T,
  context?: string
): T => {
  return ((...args: any[]) => {
    try {
      const result = fn(...args)
      if (result instanceof Promise) {
        return result.catch((error) => {
          errorHandler.error(`Async error in ${context || fn.name}`, error)
          throw error
        })
      }
      return result
    } catch (error) {
      errorHandler.error(`Sync error in ${context || fn.name}`, error as Error)
      throw error
    }
  }) as T
}