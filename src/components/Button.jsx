import { motion } from 'framer-motion';

function Button({ children, className = '', glow = true, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={[
        'group relative overflow-hidden rounded-2xl px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition duration-300',
        glow
          ? 'bg-gradient-to-r from-crimson-700 via-crimson-600 to-sand-500 text-white shadow-[0_20px_60px_rgba(139,0,0,0.22)]'
          : 'bg-white/10 text-white',
        className,
      ].join(' ')}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

export default Button;