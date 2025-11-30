import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">満月 野毛桜木町</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-6 sm:mb-8">
          {/* 営業時間 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">【営業時間】</h4>
            <div className="text-sm sm:text-base text-gray-300 space-y-2">
              <p>ランチ 11:00～15:00</p>
              <p>ディナー 17:00～23:00</p>
            </div>
          </div>

          {/* 住所 */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">【住所】</h4>
            <div className="text-sm sm:text-base text-gray-300 space-y-2">
              <p>神奈川県横浜市</p>
              <p>野毛桜木町</p>
            </div>
          </div>

          {/* お問い合わせ */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">【お問い合わせ】</h4>
            <div className="text-sm sm:text-base text-gray-300 space-y-2">
              <p>TEL：</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 text-sm sm:text-base"
          >
            地図
          </a>
          <span className="text-gray-500 mx-2">|</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 text-sm sm:text-base"
          >
            Google マップで見る
          </a>
        </div>

        {/* コピーライト */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
          <p>&copy; 2025 満月 野毛桜木町 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

