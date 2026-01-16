import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import News from '../components/News'
import Commitment from '../components/Commitment'
import Reservation from '../components/Reservation'
import Menu from '../components/Menu'
import Space from '../components/Space'
import Footer from '../components/Footer'

const Home = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }, [location])

    return (
        <>
            <Header />
            <Hero />
            <News />
            <Commitment />
            <Reservation />
            <Menu />
            <Space />
            <Footer />
        </>
    )
}

export default Home
