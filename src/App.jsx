import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import Commitment from './components/Commitment'
import Reservation from './components/Reservation'
import Menu from './components/Menu'
import Space from './components/Space'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App overflow-x-hidden w-full">
      <Header />
      <Hero />
      <News />
      <Commitment />
      <Reservation />
      <Menu />
      <Space />
      <Footer />
    </div>
  )
}

export default App

