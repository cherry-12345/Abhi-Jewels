// Advanced input sanitization and validation
export class InputSanitizer {
  // Remove potentially dangerous HTML/JS
  static sanitizeHTML(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/data:text\/html/gi, '')
      .trim()
  }

  // Sanitize for database storage
  static sanitizeForDB(input: string): string {
    return input
      .replace(/'/g, "''") // Escape single quotes
      .replace(/\\/g, '\\\\') // Escape backslashes
      .replace(/\x00/g, '') // Remove null bytes
      .trim()
  }

  // Validate and sanitize URLs
  static sanitizeURL(url: string): string | null {
    try {
      const parsed = new URL(url)
      if (!['http:', 'https:'].includes(parsed.protocol)) {
        return null
      }
      return parsed.toString()
    } catch {
      return null
    }
  }

  // Validate numeric inputs
  static sanitizeNumber(input: string | number, min = 0, max = Number.MAX_SAFE_INTEGER): number | null {
    const num = typeof input === 'string' ? parseFloat(input) : input
    if (isNaN(num) || num < min || num > max) {
      return null
    }
    return num
  }

  // Validate email format
  static sanitizeEmail(email: string): string | null {
    const sanitized = this.sanitizeHTML(email).toLowerCase()
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(sanitized) ? sanitized : null
  }

  // Validate phone numbers
  static sanitizePhone(phone: string): string | null {
    const cleaned = phone.replace(/\D/g, '')
    const phoneRegex = /^[6-9]\d{9}$/ // Indian mobile number format
    return phoneRegex.test(cleaned) ? cleaned : null
  }

  // Comprehensive product data sanitization
  static sanitizeProductData(data: any): any {
    return {
      name: this.sanitizeHTML(data.name || '').slice(0, 100),
      description: this.sanitizeHTML(data.description || '').slice(0, 1000),
      material: this.sanitizeHTML(data.material || '').slice(0, 100),
      category: this.sanitizeHTML(data.category || ''),
      price: this.sanitizeNumber(data.price, 1, 10000000),
      originalPrice: this.sanitizeNumber(data.originalPrice, 0, 10000000),
      stockQuantity: this.sanitizeNumber(data.stockQuantity, 0, 10000),
      rating: this.sanitizeNumber(data.rating, 0, 5),
      reviewCount: this.sanitizeNumber(data.reviewCount, 0, 100000),
      certification: this.sanitizeHTML(data.certification || '').slice(0, 200),
      images: Array.isArray(data.images) 
        ? data.images.map((img: string) => this.sanitizeURL(img)).filter(Boolean).slice(0, 10)
        : [],
      inStock: Boolean(data.inStock)
    }
  }
}