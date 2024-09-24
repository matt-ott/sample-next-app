'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    // Simulating a login process
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    // After successful login, redirect to dashboard or home page
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5e5e5] p-4">
      <div className="w-full max-w-md">
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]" style={{ imageRendering: 'pixelated' }}>
          <div className="border-4 border-black p-4 mb-4">
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'monospace' }}>NAME</h2>
            <p className="mb-1" style={{ fontFamily: 'monospace' }}>NEW NAME</p>
            <p className="mb-1" style={{ fontFamily: 'monospace' }}>YELLOW</p>
            <p className="flex items-center mb-1" style={{ fontFamily: 'monospace' }}>
              <span className="inline-block w-3 h-3 bg-black mr-2"></span>
              ASH
            </p>
            <p style={{ fontFamily: 'monospace' }}>JACK</p>
          </div>
          <div className="border-4 border-black p-4">
            <p className="mb-4" style={{ fontFamily: 'monospace' }}>First, hello</p>
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="px-4 py-2 bg-white border-2 border-black text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'monospace' }}
            >
              {isLoading ? 'Logging in...' : 'Log in with Google'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}