import React from 'react'
import { motion } from 'framer-motion'

const Access = () => {
  return (
    <section id="access" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            アクセス
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">ACCESS</p>
          <div className="w-20 h-1 mx-auto bg-orange-600" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto lg:items-start">
          {/* 地図 */}
          <motion.div
            className="bg-white rounded-lg shadow-xl overflow-hidden lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full aspect-video lg:aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.204646622862!2d139.62959899999998!3d35.4497277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185d0024ac3bbb%3A0xfb2d5694cf80c883!2z5rqA5pyIIOmHjuavm-ahnOacqOeUug!5e0!3m2!1sja!2sjp!4v1768884657934!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="完全個室 満月 野毛桜木町 地図"
              />
            </div>
          </motion.div>

          {/* アクセス情報 */}
          <motion.div
            className="bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  住所
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  神奈川県横浜市中区花咲町2-62
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  アクセス
                </h3>
                <div className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-2">
                  <p>横浜市営地下鉄ブルーライン線　桜木町駅　南口1から徒歩1分</p>
                  <p>JR線　桜木町駅　西口3から徒歩3分</p>
                  <p>YOKOHAMA AIR CABIN線　桜木町(ロープウェイ)駅　出口から徒歩4分</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=35.4497277,139.62959899999998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Google マップで開く
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Access
