'use client'

import { helveticaLight, helveticabold } from './fonts'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

        <div className="text-amber-400 flex justify-center items-center gap-2">
          <Image src={'/logo.png'} width={200} height={200} alt='logo' className='size-8'/>
          バンダルコア
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Text */}
        <motion.div 
          className={`absolute inset-0 flex items-center justify-center opacity-60 text-[20vw] font-bold text-[#1f1f1f]`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          バンダル
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
              className="text-4xl md:text-8xl text-[#bbbbbb]"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.6, delay: staggerDelay + 0.3 }}
            >
              ✱
            </motion.span>
            <span className={`text-4xl md:text-8xl text-[#bbbbbb] font-thin tracking-tighter ${helveticaLight.className} `}>
              RECONSTRUCTING
            </span>
          </motion.div>
          <motion.div 
            className={`text-4xl font-bold md:text-6xl text-[#bbbbbb] tracking-tighter ${helveticabold.className}`}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: staggerDelay * 2 }}
          >
            COMING SOON
          </motion.div>
          <motion.div 
            className="mt-8 text-sm tracking-wider text-gray-400"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ ...fadeInUp.transition, delay: staggerDelay * 3 }}
          >
            VANDAL STUDIOS
            <br />
            ESTD. 2024
          </motion.div>
        </div>
      </main>
    </div>
  )
}

