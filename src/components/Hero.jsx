import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const VIDEO_LANDSCAPE = '/media/野毛_横hp (540p).mp4'
const VIDEO_PORTRAIT = '/media/満月野毛_縦hp (540p).mp4'

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 768
  )
  const videoRef = useRef(null)

  // 画面幅に応じてPC/スマホを切り替え
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const handleChange = (e) => setIsDesktop(e.matches)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [])

  // 動画ソースが変わったら再読み込み
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [isDesktop])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-end justify-center bg-gray-900 text-white overflow-hidden"
    >
      {/* 背景動画 */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source
            src={isDesktop ? VIDEO_LANDSCAPE : VIDEO_PORTRAIT}
            type="video/mp4"
          />
        </video>
        {/* フィルターなし */}
      </div>

      <div className="text-center z-10 px-8 sm:px-6 pb-16 sm:pb-24 max-w-4xl mx-auto">
        <motion.h1
          className="font-bold mb-6 sm:mb-8 text-white leading-tight whitespace-nowrap drop-shadow-lg"
          style={{
            fontSize: 'clamp(1.0rem, 4vw, 4rem)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          旬の鮮魚と彩り野菜、心温まる野毛の隠れ家
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          市場直送の鮮魚と厳選野菜。<br className="hidden sm:block" />四季折々の美味を、心ゆくまで。<br className="hidden sm:block" />桜木町駅から徒歩1分。
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
