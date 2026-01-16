import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import NewsDetail from './pages/NewsDetail'

function App() {
  const location = useLocation()

  // Reset scroll on route change
  React.useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.state])

  return (
    <div className="App overflow-x-hidden w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  )
}

export default App

