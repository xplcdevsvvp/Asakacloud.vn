import { motion } from 'framer-motion'

const features = [
  { icon: '⚡', title: 'Khởi tạo tức thì', desc: 'Máy chủ được tạo chỉ trong 30 giây' },
  { icon: '🛟', title: 'Hỗ trợ 24/7', desc: 'Đội ngũ Việt Nam luôn sẵn sàng giúp bạn' },
  { icon: '🛡️', title: 'Bảo vệ DDoS', desc: 'Hệ thống phòng chống tấn công tiên tiến' },
  { icon: '💾', title: 'Sao lưu không giới hạn', desc: 'Khôi phục dữ liệu dễ dàng với 1 click' },
  { icon: '🎮', title: 'Cài đặt mod 1-click', desc: 'Forge, Fabric, Paper plugins có sẵn' },
  { icon: '💰', title: 'Giá hợp lý nhất', desc: 'Chất lượng cao nhưng chi phí thấp' },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section id="features" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-white mb-4">
            Lý Do Chọn AsakaCloud
          </h2>
          <p className="text-text-gray text-lg">
            Chúng tôi mang đến những ưu điểm vượt trội
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-dark-hover border border-neon-blue border-opacity-30 flex items-center justify-center text-4xl mb-4 shadow-neon-sm"
                whileHover={{ scale: 1.07, boxShadow: '0 0 12px rgba(79, 140, 255, 0.5)' }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-text-gray-muted">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
