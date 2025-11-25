import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './pages/Hero'
import Packages from './pages/Packages'
import Features from './pages/Features'
import Software from './pages/Software'
import Commitment from './pages/Commitment'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-dark-bg min-h-screen">
      <Header scrolled={scrolled} />
      <Hero />
      <Packages />
      <Features />
      <Software />
      <Commitment />
      <Footer />
    </div>
  )
}
