import React from 'react'
import { motion } from 'framer-motion'

const Menu = () => {
  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            満月のメニュー
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            子供から大人まで幅広く愛される焼肉店
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            いつでもあなたの帰りをお待ちしております
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105"
          >
            メニューを見る
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Menu
