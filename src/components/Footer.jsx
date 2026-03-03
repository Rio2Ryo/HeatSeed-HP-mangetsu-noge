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
              className="inline-flex items-center gap-3 bg-white text-gray-800 font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 text-base sm:text-lg tracking-wide"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>Official Instagram</span>
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

