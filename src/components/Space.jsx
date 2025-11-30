import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SpaceCard = ({ title, description, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="w-full h-64 sm:h-80 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">[ 店内画像 ]</p>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{description}</p>
      </div>
    </motion.div>
  )
}

const Space = () => {
  const spaces = [
    {
      title: 'ゆったりとしたテーブル席',
      description: '快適な空間でお食事をお楽しみいただけます。',
    },
    {
      title: '大人数のご宴会にも対応可能',
      description: '各種ご宴会、パーティーにもご利用いただけます。',
    },
    {
      title: '大きな窓側席もございます',
      description: '開放感のある窓側のお席で、特別なひとときをお過ごしください。',
    },
  ]

  return (
    <section id="space" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            店内の雰囲気
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">SPACE</p>
          <div className="w-20 h-1 mx-auto bg-orange-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {spaces.map((space, index) => (
            <SpaceCard key={index} {...space} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Space

