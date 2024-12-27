'use client'

import { helveticaLight, helveticabold } from './fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactButton from '@/components/Button'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { IoLogoBehance } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.48, 0.15, 0.25, 0.96] }
}

const staggerDelay = 0.2

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col">
      {/* Header */}
      <motion.header 
        className="p-6 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src="/macro.png" width={100} height={100} alt="logo" />

        <div className="text-white text-xl flex justify-center items-center gap-2">
          <Image src={'/logo.png'} width={200} height={200} alt='logo' className='size-8'/>
          バンダルコア
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Text */}
        <motion.div 
          className={`absolute bottom-14 inset-0 flex items-center justify-center opacity-60 text-[16vw] font-bold text-[#1f1f1f]`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
           バンダルコア
        </motion.div>

        {/* Main Text with Enhanced Animation */}
        <div className={`relative z-10 text-center`}>
          <motion.div 
            className="flex items-center gap-2 font-thin justify-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: staggerDelay }}
          >
            <motion.span 
              className="text-4xl md:text-5xl font-bold text-[#bbbbbb]"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.6, delay: staggerDelay + 0.3 }}
            >
              ✱
            </motion.span>
            <span className={`text-4xl md:text-6xl text-[#bbbbbb] font-thin ${helveticaLight.className}`}>
              RECONSTRUCTING
            </span>
          </motion.div>
          <motion.div 
            className={`text-4xl font-bold md:text-6xl text-[#fff] tracking-wider ${helveticabold.className}`}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: staggerDelay * 2 }}
          >
            COMING SOON
          </motion.div>

          <motion.div 
            className="mt-10 text-sm tracking-wider text-gray-400"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: staggerDelay * 3 }}
          >
           <ContactButton/>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="p-6 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: staggerDelay * 4 }}
      >
        <div className="text-sm text-neutral-600">
          © 2024 VANDAL STUDIOS
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="https://www.behance.net/vandalstudios?trk=public_post_main-feed-card-text#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity"
          >
            <IoLogoBehance className='text-blue-500 size-8'/>
          </Link>
          <Link 
            href="https://x.com/vandalstudiosin?t=2L6Psa_2zLudj0WQ2jTm0Q&s=09" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity"
          >
            <FaXTwitter className=" size-8" />
          </Link>
          <Link 
            href="https://www.instagram.com/vandal.studios/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-40 hover:opacity-100 transition-opacity"
          >
            <Instagram className=" size-8" />
          </Link>
        </div>
      </motion.footer>
    </div>
  )
}

