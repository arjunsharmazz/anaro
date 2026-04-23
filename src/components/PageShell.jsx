import { motion } from 'framer-motion';

function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative z-10"
    >
      {children}
    </motion.main>
  );
}

export default PageShell;