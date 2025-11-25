import { motion } from 'framer-motion'

const packages = [
  {
    id: 1,
    name: 'Basic',
    price: '25,000',
    currency: 'VND',
    specs: ['Intel Xeon E5', 'RAM 3GB', 'SSD NVMe', '10Gbps port', 'AntiDDoS Pro'],
  },
  {
    id: 2,
    name: 'Balanced',
    price: '60,000',
    currency: 'VND',
    specs: ['Intel Xeon Gold', 'RAM 2GB', 'SSD NVMe', '10Gbps port', 'AntiDDoS Pro'],
    featured: true,
  },
  {
    id: 3,
    name: 'Professional',
    price: '120,000',
    currency: 'VND',
    specs: ['Intel Xeon Platinum', 'RAM 4GB', 'SSD NVMe', '40Gbps port', 'AntiDDoS Pro'],
  },
  {
    id: 4,
    name: 'Enterprise',
    price: '250,000',
    currency: 'VND',
    specs: ['AMD EPYC 7002', 'RAM 8GB', 'SSD NVMe', '40Gbps port', 'AntiDDoS Pro'],
  },
  {
    id: 5,
    name: 'Ultra',
    price: '500,000',
    currency: 'VND',
    specs: ['AMD EPYC 7003', 'RAM 16GB', 'SSD NVMe', '100Gbps port', 'AntiDDoS Pro'],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-white mb-4">
            Chọn Gói Phù Hợp
          </h2>
          <p className="text-text-gray text-lg">
            Các gói hosting được thiết kế để phù hợp với mọi nhu cầu
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`w-64 rounded-2xl p-8 transition-all duration-300 ${
                pkg.featured
                  ? 'bg-dark-card border-2 border-neon-blue shadow-neon-lg'
                  : 'bg-dark-card border border-neon-blue border-opacity-20 shadow-neon-sm hover:shadow-neon-md hover:border-neon-blue hover:border-opacity-100'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-neon text-white text-sm font-bold rounded-full">
                  BEST SELLER
                </div>
              )}

              <h3 className="text-2xl font-bold text-text-white mb-3">
                {pkg.name}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-neon-blue">
                  {pkg.price}
                </span>
                <span className="text-text-gray ml-2">/{pkg.currency}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-gray">
                    <span className="text-neon-blue text-lg mt-1">✓</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-neon-blue text-dark-bg hover:bg-opacity-90'
                    : 'bg-neon-blue hover:bg-opacity-90 text-dark-bg'
                }`}
              >
                Mua Ngay
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
