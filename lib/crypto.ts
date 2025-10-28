// Advanced cryptographic utilities
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default-key-change-in-production'
const IV_LENGTH = 16

export class CryptoManager {
  private static encoder = new TextEncoder()
  private static decoder = new TextDecoder()

  static async generateKey(): Promise<CryptoKey> {
    return await crypto.subtle.importKey(
      'raw',
      this.encoder.encode(ENCRYPTION_KEY.padEnd(32, '0').slice(0, 32)),
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    )
  }

  static async encrypt(data: string): Promise<string> {
    const key = await this.generateKey()
    const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH))
    const encodedData = this.encoder.encode(data)

    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encodedData
    )

    const combined = new Uint8Array(iv.length + encrypted.byteLength)
    combined.set(iv)
    combined.set(new Uint8Array(encrypted), iv.length)

    return btoa(String.fromCharCode(...Array.from(combined)))
  }

  static async decrypt(encryptedData: string): Promise<string> {
    try {
      const key = await this.generateKey()
      const combined = new Uint8Array(
        atob(encryptedData).split('').map(char => char.charCodeAt(0))
      )

      const iv = combined.slice(0, IV_LENGTH)
      const encrypted = combined.slice(IV_LENGTH)

      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        encrypted
      )

      return this.decoder.decode(decrypted)
    } catch {
      throw new Error('Decryption failed')
    }
  }

  static async hashPassword(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
    const actualSalt = salt || crypto.randomUUID()
    const combined = password + actualSalt
    const encoded = this.encoder.encode(combined)
    
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoded)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    
    return { hash, salt: actualSalt }
  }

  static async verifyPassword(password: string, hash: string, salt: string): Promise<boolean> {
    const { hash: newHash } = await this.hashPassword(password, salt)
    return newHash === hash
  }

  static generateSecureToken(): string {
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
}