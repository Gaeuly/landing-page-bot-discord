'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function StatsCounter({ end, label, suffix = '', duration = 2 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
}