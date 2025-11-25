import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-secondary shadow-lg' : 'bg-black bg-opacity-45'
      }`}
      style={{ height: '72px' }}
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 w-32">
          <img
            src="https://img.zyndata.vn/asakacloud.svg"
            alt="AsakaCloud"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#packages" className="text-text-white font-medium hover:text-neon-blue transition-colors duration-300 relative group">
            Gói dịch vụ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#features" className="text-text-white font-medium hover:text-neon-blue transition-colors duration-300 relative group">
            Tính năng
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#software" className="text-text-white font-medium hover:text-neon-blue transition-colors duration-300 relative group">
            Phần mềm hỗ trợ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#commitment" className="text-text-white font-medium hover:text-neon-blue transition-colors duration-300 relative group">
            Cam kết
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* CTA Button */}
          <motion.button
            className="px-6 py-3 rounded-xl bg-gradient-neon text-white font-semibold shadow-neon-md hover:shadow-neon-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Tạo Máy Chủ
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon-blue text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-dark-secondary border-t border-neon-blue border-opacity-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav className="flex flex-col p-4 gap-3">
            <a href="#packages" className="text-text-white hover:text-neon-blue transition-colors">Gói dịch vụ</a>
            <a href="#features" className="text-text-white hover:text-neon-blue transition-colors">Tính năng</a>
            <a href="#software" className="text-text-white hover:text-neon-blue transition-colors">Phần mềm hỗ trợ</a>
            <a href="#commitment" className="text-text-white hover:text-neon-blue transition-colors">Cam kết</a>
            <button className="px-6 py-2 rounded-xl bg-gradient-neon text-white font-semibold w-full">
              Tạo Máy Chủ
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
