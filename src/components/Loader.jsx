import { motion } from 'framer-motion';

function Loader({ fullScreen = false, label = 'Loading' }) {
  return (
    <div
      className={[
        'flex items-center justify-center',
        fullScreen ? 'min-h-[70vh]' : 'min-h-[240px]',
      ].join(' ')}
    >
      <div className="glass-panel rounded-[2rem] px-8 py-7 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="mx-auto h-12 w-12 rounded-full border-2 border-white/20 border-t-crimson-500"
        />
        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-white/60">{label}</p>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="glass-panel animate-pulse rounded-[2rem] p-4">
      <div className="h-64 rounded-[1.5rem] bg-white/10" />
      <div className="mt-4 h-4 w-24 rounded-full bg-white/10" />
      <div className="mt-3 h-6 w-3/4 rounded-full bg-white/10" />
      <div className="mt-3 h-5 w-1/3 rounded-full bg-white/10" />
    </div>
  );
}

export default Loader;