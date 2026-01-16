import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SpaceCard = ({ title, description, image, index }) => {
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
      <div className="w-full h-64 sm:h-80 bg-gray-200 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
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
      title: '臨場感あふれるカウンター席',
      description: '目の前で調理される臨場感を味わえる特等席。お一人様やデートでのご利用に最適です。スタッフとの会話もお楽しみいただけます。',
      image: '/media/スクリーンショット 2026-01-07 142352.png',
    },
    {
      title: '広々としたテーブル席',
      description: '紫のアクセントが落ち着いた雰囲気を演出するテーブル席。少人数からグループまで、様々なシーンでゆったりとお寛ぎいただけます。',
      image: '/media/スクリーンショット 2026-01-07 142611.png',
    },
    {
      title: 'ゆったり寛げる半個室',
      description: 'プライベートな時間を大切にできる半個室。周りを気にせず、大切な方とのお食事や会話を心ゆくまでお楽しみください。',
      image: '/media/スクリーンショット 2026-01-07 142524.png',
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

