import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SlideInAnimationProps {
  direction: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

const SlideInAnimation: React.FC<SlideInAnimationProps> = ({ direction, children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { x: direction === 'left' ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;