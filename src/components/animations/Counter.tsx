import React, { useEffect } from 'react';
import { motion, MotionValue, useMotionValue, useTransform } from 'framer-motion';
import { animate as framerAnimate } from 'framer-motion';
interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 1, className = '' }) => {
  const motionValue = useMotionValue(from);
  const number = useTransform(motionValue, value => Math.round(value));

  useEffect(() => {
    const controls = animate(motionValue, to, { duration });
    return controls.stop;
  }, [motionValue, to, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {number}
    </motion.span>
  );
};

export default Counter;



function animate(motionValue: MotionValue<number>, to: number, { duration }: { duration: number }) {
    return framerAnimate(motionValue, to, { duration });
}
