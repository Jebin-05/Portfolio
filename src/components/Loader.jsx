import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-primary z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo mark */}
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-0 rounded-xl border border-accent/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-1.5 rounded-lg border border-accent/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          <span className="font-display text-xl font-bold text-accent">JA</span>
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-px bg-border-line overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* Name */}
        <motion.p
          className="text-label uppercase tracking-[0.2em] text-text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Jebin Abraham
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;