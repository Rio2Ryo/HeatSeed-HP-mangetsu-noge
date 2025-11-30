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
      title: 'Point1 仕入れルートの強さ',
      description:
        '独自の流通ルートを活かし、上質な和牛を手頃な価格で皆さまにお届けします。確かな目利きで選び抜いた和牛を、最高の状態で味わっていただけるよう、丁寧に仕込み、一皿一皿心を込めてご提供いたします。',
      image: null,
    },
    {
      title: 'Point2 経験豊富な店主自慢の料理',
      description:
        '豊富な経験を積んだ店主が、誰よりも熱い想いで肉と向き合います。厳選した上質な肉を、一番美味しい状態でお届けするために、仕入れから調理法まで一切の妥協をしません。',
      image: null,
    },
    {
      title: 'Point3 利便性の高さ',
      description:
        '野毛桜木町から徒歩○分という圧倒的な立地で、地域の皆様に愛される焼肉屋さんです。駅を出て○分ほど歩いて右手に見える建物です。',
      image: null,
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
