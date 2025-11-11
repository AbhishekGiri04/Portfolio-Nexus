import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingPageProps {
  onLoadingComplete: () => void;
  isNavigation?: boolean;
}

const LoadingPage = ({ onLoadingComplete, isNavigation = false }: LoadingPageProps) => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const duration = isNavigation ? 2000 : 5000;
    const progressIncrement = isNavigation ? 5 : 2;
    const progressInterval = isNavigation ? 40 : 100;
    
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + progressIncrement;
      });
    }, progressInterval);

    const dotsTimer = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
      clearInterval(dotsTimer);
    };
  }, [onLoadingComplete, isNavigation]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{ top: `${i * 6.67}%` }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        <div className="relative z-10 text-center">
          {/* Main Loading Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-40 h-40 border-2 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 w-36 h-36 border-2 border-transparent border-b-cyan-300 border-l-purple-300 rounded-full"
              />
              <div className="w-40 h-40 flex items-center justify-center">
                <img
                  src="https://static.wixstatic.com/media/b4d146_c88b2d637ebe45299f96de4904509287~mv2.gif"
                  alt="Loading"
                  className="w-24 h-24 object-contain filter brightness-125 contrast-125"
                />
              </div>
            </div>
          </motion.div>

          {/* Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to my
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-white/90">
              Portfolio Website
            </h2>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-80 mx-auto mb-6"
          >
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Loading Experience</span>
              <span className="text-cyan-400 font-mono">{progress}%</span>
            </div>
            <div className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 400] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-gray-400 text-lg font-light"
          >
            <span className="text-cyan-400">{isNavigation ? 'Loading' : 'Initializing'}</span> {isNavigation ? 'page' : 'amazing experience'}{dots}
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-purple-400/50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-purple-400/50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingPage;