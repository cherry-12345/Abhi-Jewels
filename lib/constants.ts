// Centralized configuration constants

// Contact Information
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '917947106192'
export const CONTACT_WHATSAPP = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP || '917947106192'
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@ajabhijewels.com'

// Format phone number for tel: links (ensure +91 prefix)
export const formatPhoneForTel = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '')
  return cleanPhone.startsWith('91') ? `+${cleanPhone}` : `+91${cleanPhone}`
}

// Format phone for display (mask or show full)
export const formatPhoneForDisplay = (phone: string, masked = false): string => {
  if (masked) {
    const cleaned = phone.replace(/\D/g, '')
    return `${cleaned.slice(0, 3)}*******`
  }
  // Return in readable format: +91 XXXXX XXXXX
  const cleaned = phone.replace(/\D/g, '')
  const formatted = cleaned.startsWith('91') ? cleaned : `91${cleaned}`
  const countryCode = formatted.slice(0, 2)
  const firstPart = formatted.slice(2, 7)
  const secondPart = formatted.slice(7)
  return `+${countryCode} ${firstPart} ${secondPart}`
}

// API Configuration
export const API_TIMEOUT = 30000 // 30 seconds
export const MAX_RETRIES = 3

// Security Configuration
export const SESSION_TIMEOUT = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
export const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes
export const RATE_LIMIT_MAX_REQUESTS = 100

// Site Configuration
export const SITE_NAME = 'AJ Abhi Jewels'
export const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
