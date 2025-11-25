import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-dark">
      {/* Background blur effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-purple rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-text-white leading-tight"
              variants={itemVariants}
            >
              Minecraft Server Hosting
              <span className="text-neon-blue"> #1 Vietnam</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-text-gray-light opacity-85 leading-relaxed"
              variants={itemVariants}
            >
              Dịch vụ cho thuê máy chủ Game Việt Nam với phần cứng cao cấp, hỗ trợ 24/7 và bảo vệ DDoS tiên tiến.
              AsakaCloud tự hào là một trong những dịch vụ tốt nhất tại Việt Nam.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <button className="px-8 py-4 bg-gradient-neon text-white font-semibold rounded-xl shadow-neon-lg hover:shadow-neon-xl transition-all duration-300 hover:scale-105">
                Tạo Máy Chủ Game
              </button>
              <button className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-semibold rounded-xl hover:bg-neon-blue hover:bg-opacity-10 transition-all duration-300">
                Tư Vấn Ngay
              </button>
            </motion.div>
          </div>

          {/* Server Illustration */}
          <motion.div
            className="hidden md:flex justify-center"
            animate={{ y: ['0%', '-3%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-full max-w-sm aspect-square bg-dark-card rounded-2xl shadow-neon-lg border border-neon-blue border-opacity-20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚙️</div>
                <p className="text-neon-blue font-semibold">Server 3D Illustration</p>
                <p className="text-text-gray text-sm">Phần cứng cao cấp</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
