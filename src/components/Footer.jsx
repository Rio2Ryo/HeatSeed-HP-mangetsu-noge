import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">完全個室 満月 野毛桜木町</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-6 sm:mb-8">
          {/* 営業時間 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">【営業時間】</h4>
            <div className="text-sm sm:text-base text-gray-300 space-y-3">
              <div>
                <p className="font-semibold">平日・祝前日・祝後日</p>
                <p>17:00～23:00（料理22:00 ドリンク22:30）</p>
              </div>
              <div>
                <p className="font-semibold">土</p>
                <p>12:00～23:00（料理22:00 ドリンク22:30）</p>
              </div>
              <div>
                <p className="font-semibold">日・祝日</p>
                <p>12:00～22:00（料理21:00 ドリンク21:30）</p>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs text-gray-400">※（）内の時間はラストオーダーの時間です</p>
              </div>
            </div>
          </div>

          {/* 住所・アクセス */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">【住所・アクセス】</h4>
            <div className="text-sm sm:text-base text-gray-300 space-y-2">
              <p className="leading-relaxed">
                神奈川県横浜市中区花咲町2-62
              </p>
              <p className="pt-2">桜木町駅南口1から徒歩1分</p>
            </div>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">【お問い合わせ】</h4>
            <div className="text-sm sm:text-base text-gray-300 space-y-2">
              <p>
                TEL：
                <a
                  href="tel:045-341-0988"
                  className="text-orange-400 hover:text-orange-300 transition-colors ml-2"
                >
                  045-341-0988
                </a>
              </p>
              <p className="text-xs text-gray-400">※電話予約の場合は、一休ポイントは付与されません</p>
            </div>
          </div>
        </div>

        {/* ソーシャルメディア・リンク */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-4">
            <a
              href="https://www.instagram.com/mangetsunogesaku/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          
          <div className="space-y-2 sm:space-y-0 sm:space-x-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=35.4497277,139.62959899999998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-orange-400 hover:text-orange-300 text-sm sm:text-base transition-colors"
            >
              Google マップで見る
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a
              href="https://tabelog.com/kanagawa/A1401/A140102/14095421/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-orange-400 hover:text-orange-300 text-sm sm:text-base transition-colors"
            >
              食べログ
            </a>
            <span className="hidden sm:inline text-gray-500">|</span>
            <a
              href="https://www.hotpepper.jp/strJ003851137/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-orange-400 hover:text-orange-300 text-sm sm:text-base transition-colors"
            >
              ホットペッパー
            </a>
          </div>
        </div>

        {/* コピーライト */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
          <p>&copy; 2025 完全個室 満月 野毛桜木町 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

