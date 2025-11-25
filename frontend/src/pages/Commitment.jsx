import { motion } from 'framer-motion'

const commitments = [
  {
    icon: '🟢',
    title: '99.9% Uptime',
    desc: 'Đảm bảo máy chủ luôn hoạt động ổn định',
  },
  {
    icon: '⚡',
    title: '< 30ms Latency',
    desc: 'Ping thấp nhất cho trải nghiệm tốt nhất',
  },
  {
    icon: '🔒',
    title: 'RAID Hardware',
    desc: 'Bảo vệ dữ liệu 24/7 với RAID redundancy',
  },
  {
    icon: '📊',
    title: 'Monitoring 24/7',
    desc: 'Giám sát hệ thống liên tục mọi lúc',
  },
]

export default function Commitment() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  }

  return (
    <section id="commitment" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-white mb-4">
            Cam Kết Của Chúng Tôi
          </h2>
          <p className="text-text-gray text-lg">
            Chất lượng dịch vụ tốt nhất cho bạn
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-dark-card rounded-2xl p-8 border border-neon-blue border-opacity-10 shadow-neon-sm hover:shadow-neon-md transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-text-white mb-2">
                {item.title}
              </h3>
              <p className="text-text-gray">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
