import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    'Dịch Vụ': ['Minecraft Hosting', 'Game Server', 'Dedicated Server', 'VPS'],
    'Công Ty': ['Về Chúng Tôi', 'Blog', 'Tuyên Bố', 'Liên Hệ'],
    'Hỗ Trợ': ['Tài Liệu', 'FAQ', 'Ticket Support', 'Discord'],
    'Pháp Lý': ['Điều Khoản', 'Bảo Mật', 'Cookie', 'DMCA'],
  }

  return (
    <footer className="bg-dark-secondary border-t border-neon-blue border-opacity-10">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://img.zyndata.vn/asakacloud.svg"
              alt="AsakaCloud"
              className="h-10 w-auto mb-4"
            />
            <p className="text-text-gray text-sm">
              Minecraft Server Hosting #1 Vietnam
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-text-white font-bold text-sm mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-text-gray text-sm hover:text-neon-blue transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-neon-blue border-opacity-10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-gray text-sm">
              © 2025 AsakaCloud. All rights reserved.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Discord', 'Twitter', 'YouTube'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-neon-blue border-opacity-30 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:bg-opacity-10 transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
