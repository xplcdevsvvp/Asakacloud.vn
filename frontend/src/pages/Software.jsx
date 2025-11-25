import { motion } from 'framer-motion'

const softwares = [
  { name: 'Spigot', icon: '🎮' },
  { name: 'Paper', icon: '📄' },
  { name: 'Forge', icon: '🔧' },
  { name: 'Fabric', icon: '🧵' },
  { name: 'Bungeecord', icon: '🌐' },
  { name: 'Waterfall', icon: '💧' },
  { name: 'Velocity', icon: '⚡' },
]

export default function Software() {
  return (
    <section id="software" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-white mb-4">
            Phần Mềm Hỗ Trợ
          </h2>
          <p className="text-text-gray text-lg">
            Hỗ trợ nhiều phần mềm máy chủ phổ biến
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {softwares.map((soft, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}
              className="w-24 h-24 rounded-full bg-dark-card border border-neon-blue border-opacity-20 flex flex-col items-center justify-center shadow-neon-sm hover:shadow-neon-md transition-all duration-300"
            >
              <div className="text-3xl mb-2">{soft.icon}</div>
              <p className="text-xs text-text-gray text-center font-medium">
                {soft.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
