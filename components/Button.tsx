'use client'

import { Mail } from 'lucide-react'
import Link from 'next/link'
import { helvetica } from '@/app/fonts'
interface ContactButtonProps {
  email?: string
}

export default function ContactButton({ email = "contact@vandal.com" }: ContactButtonProps) {
  return (
    <Link 
      href={`mailto:${email}`}
      className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full border border-white/20 bg-black hover:border-white/40 transition-colors"
    >
      <span className={`relative z-10 text-sm font-medium text-white tracking-wider ${helvetica.className}`}>
        CONTACT US
      </span>
      <Mail className="relative z-10 w-4 h-4 text-white" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  )
}

