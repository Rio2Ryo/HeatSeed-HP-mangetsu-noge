import React from 'react'
import { motion } from 'framer-motion'

const Reservation = () => {
  return (
    <section id="reservation" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ご来店予約
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">RESERVATION</p>
          <div className="w-20 h-1 mx-auto bg-orange-600" />
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-gray-700">
            ご予約はお電話・食べログ・ホットペッパー・ぐるなび・一休にて承っております。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <motion.a
            href="tel:045-341-0988"
            className="flex flex-col items-center justify-center bg-white border-2 border-orange-600 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">電話予約</h3>
            <p className="text-base sm:text-lg text-gray-600">045-341-0988</p>
          </motion.a>

          <motion.a
            href="https://tabelog.com/kanagawa/A1401/A140102/14095421/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white border-2 border-orange-600 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">食べログ</h3>
            <p className="text-base sm:text-lg text-gray-600">オンライン予約</p>
          </motion.a>

          <motion.a
            href="https://www.hotpepper.jp/strJ003851137/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white border-2 border-orange-600 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">ホットペッパー</h3>
            <p className="text-base sm:text-lg text-gray-600">クーポン・予約</p>
          </motion.a>

          <motion.a
            href="https://r.gnavi.co.jp/b1vyvb400000/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white border-2 border-orange-600 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">ぐるなび</h3>
            <p className="text-base sm:text-lg text-gray-600">予約・クーポン</p>
          </motion.a>

          <motion.a
            href="https://restaurant.ikyu.com/151860"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white border-2 border-orange-600 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">一休.com</h3>
            <p className="text-base sm:text-lg text-gray-600">レストラン予約</p>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Reservation
