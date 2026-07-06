import { motion } from 'framer-motion'
import { FaBalanceScale } from 'react-icons/fa'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-gold text-5xl"
      >
        <FaBalanceScale />
      </motion.div>
      <motion.div
        className="h-0.5 w-40 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gold-gradient"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
    </div>
  )
}
