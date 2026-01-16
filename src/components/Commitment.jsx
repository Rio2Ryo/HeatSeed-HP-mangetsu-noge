import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CommitmentCard = ({ title, description, image, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="text-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="w-full h-48 sm:h-64 bg-gray-100 border-b border-gray-200 overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm sm:text-base opacity-70">画像を追加</p>
          </div>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed font-medium text-base sm:text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

const Commitment = () => {
  const commitments = [
    {
      title: 'Point1 目利きの仕入れ',
      description:
        '毎朝市場へ足を運び、その日一番の魚を目利きで選び抜きます。鮮度と質にこだわった魚介は、どれも自慢の逸品です。',
      image: '/media/スクリーンショット 2026-01-07 104948.png',
    },
    {
      title: 'Point2 職人の技',
      description:
        '素材の良さを最大限に活かすため、包丁の入れ方から盛り付けまで、細部にこだわり抜いた職人の技が光ります。',
      image: '/media/スクリーンショット 2026-01-07 110618.png',
    },
    {
      title: 'Point3 彩り豊かな旬菜',
      description:
        '魚介だけでなく、季節の野菜も厳選して仕入れています。彩り豊かで栄養満点の旬の味覚をお楽しみください。',
      image: '/media/スクリーンショット 2026-01-07 105057.png',
    },
  ]

  return (
    <section id="commitment" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            満月のこだわり
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">COMMITMENT</p>
          <div className="w-20 h-1 mx-auto bg-orange-600" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {commitments.map((commitment, index) => (
            <CommitmentCard key={index} {...commitment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Commitment
