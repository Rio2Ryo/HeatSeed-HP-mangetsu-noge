import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NewsDetail = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 min-h-screen bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8 sm:p-12"
                    >
                        <div className="mb-8 border-b border-gray-200 pb-6">
                            <p className="text-gray-500 mb-2">2026年 1月 1日</p>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                ホームページを開設しました
                            </h1>
                        </div>

                        <div className="prose max-w-none mb-12 text-gray-700 leading-relaxed">
                            <p>
                                ホームページを開設しました。
                                <br />
                                今後ともよろしくお願いいたします。
                            </p>
                        </div>

                        <div className="text-center">
                            <Link
                                to="/"
                                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                            >
                                トップページに戻る
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default NewsDetail
