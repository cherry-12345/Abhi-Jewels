// Security monitoring and audit logging
interface SecurityEvent {
  id: string
  timestamp: string
  type: 'login_attempt' | 'login_success' | 'login_failure' | 'suspicious_activity' | 'admin_action'
  userId?: string
  ip: string
  userAgent: string
  details: Record<string, any>
  severity: 'low' | 'medium' | 'high' | 'critical'
}

class SecurityMonitor {
  private events: SecurityEvent[] = []
  private readonly maxEvents = 10000

  logEvent(event: Omit<SecurityEvent, 'id' | 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString()
    }

    this.events.push(securityEvent)

    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents)
    }

    // Alert on critical events
    if (event.severity === 'critical') {
      this.alertCriticalEvent(securityEvent)
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', securityEvent)
    }
  }

  getEvents(filter?: Partial<SecurityEvent>): SecurityEvent[] {
    if (!filter) return this.events

    return this.events.filter(event => {
      return Object.entries(filter).every(([key, value]) => 
        event[key as keyof SecurityEvent] === value
      )
    })
  }

  getRecentSuspiciousActivity(hours = 24): SecurityEvent[] {
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000)
    return this.events.filter(event => 
      new Date(event.timestamp) > cutoff && 
      ['suspicious_activity', 'login_failure'].includes(event.type)
    )
  }

  detectBruteForce(ip: string, timeWindow = 15 * 60 * 1000): boolean {
    const cutoff = new Date(Date.now() - timeWindow)
    const recentFailures = this.events.filter(event =>
      event.ip === ip &&
      event.type === 'login_failure' &&
      new Date(event.timestamp) > cutoff
    )

    return recentFailures.length >= 5
  }

  private async alertCriticalEvent(event: SecurityEvent): Promise<void> {
    // In production, send to monitoring service
    try {
      if (process.env.NODE_ENV === 'production') {
        await fetch('/api/security/alert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(event)
        })
      }
    } catch (error) {
      console.error('Failed to send security alert:', error)
    }
  }

  generateSecurityReport(): {
    totalEvents: number
    eventsByType: Record<string, number>
    eventsBySeverity: Record<string, number>
    topIPs: Array<{ ip: string; count: number }>
    suspiciousActivity: SecurityEvent[]
  } {
    const eventsByType: Record<string, number> = {}
    const eventsBySeverity: Record<string, number> = {}
    const ipCounts: Record<string, number> = {}

    this.events.forEach(event => {
      eventsByType[event.type] = (eventsByType[event.type] || 0) + 1
      eventsBySeverity[event.severity] = (eventsBySeverity[event.severity] || 0) + 1
      ipCounts[event.ip] = (ipCounts[event.ip] || 0) + 1
    })

    const topIPs = Object.entries(ipCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([ip, count]) => ({ ip, count }))

    return {
      totalEvents: this.events.length,
      eventsByType,
      eventsBySeverity,
      topIPs,
      suspiciousActivity: this.getRecentSuspiciousActivity()
    }
  }
}

export const securityMonitor = new SecurityMonitor()

// Helper functions for common security checks
export const SecurityUtils = {
  getClientIP(request: Request): string {
    return request.headers.get('x-forwarded-for') || 
           request.headers.get('x-real-ip') || 
           'unknown'
  },

  getUserAgent(request: Request): string {
    return request.headers.get('user-agent') || 'unknown'
  },

  detectSuspiciousPatterns(input: string): boolean {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /expression\s*\(/i,
      /url\s*\(/i,
      /import\s*\(/i
    ]

    return suspiciousPatterns.some(pattern => pattern.test(input))
  },

  isValidOrigin(origin: string, allowedOrigins: string[]): boolean {
    return allowedOrigins.includes(origin)
  }
}