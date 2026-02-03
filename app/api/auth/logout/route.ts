import { NextResponse } from 'next/server'

export async function POST() {
  // Clear the admin_auth_token cookie by setting it to empty with maxAge: 0
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  })

  response.cookies.set({
    name: 'admin_auth_token',
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0 // Immediately expire the cookie
  })

  return response
}
