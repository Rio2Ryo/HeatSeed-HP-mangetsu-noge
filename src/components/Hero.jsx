import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>

      <div className="text-center z-10 px-4 sm:px-6 py-6 sm:py-12 max-w-4xl mx-auto">
        <motion.h1
          className="font-bold mb-6 sm:mb-8 text-white leading-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          皆が笑顔になる焼肉のお店
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          上質な和牛を手頃な価格で。野毛桜木町から徒歩○分。
        </motion.p>

        <motion.button
          onClick={() => scrollToSection('reservation')}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          ご予約はこちら
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
