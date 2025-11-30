import React from 'react'
import { motion } from 'framer-motion'

const News = () => {
  const newsItems = [
    {
      date: '2025年 4月 5日',
      title: '横浜マガジンさんに記事掲載いただきました♪',
      link: '#',
    },
    {
      date: '2025年 4月 1日',
      title: 'ランチ始めました！',
      link: '#',
    },
    {
      date: '2025年 3月 21日',
      title: '満月 野毛桜木町ついにOPEN！',
      link: '#',
    },
  ]

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            新着情報
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">NEWS</p>
          <div className="w-20 h-1 mx-auto bg-orange-600" />
        </motion.div>

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-6 sm:pb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-gray-500 text-sm sm:text-base mb-2">{item.date}</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <a
                href={item.link}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base"
              >
                詳細を見る →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 font-medium text-sm sm:text-base"
          >
            お知らせ一覧 →
          </a>
        </div>
      </div>
    </section>
  )
}

export default News
