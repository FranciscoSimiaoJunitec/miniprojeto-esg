import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SlideRightAnimationProps {
  direction: 'right' | 'down';
  endY?: number;
  endX?: number;
  children: React.ReactNode;
  className?: string;
}

const SlideRightAnimation: React.FC<SlideRightAnimationProps> = ({ direction, endY = 0, endX = 0, children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: direction === 'right' ? { x: -100, y: -20 } : { y: -100 },
    visible: direction === 'right' ? { x: endX, y: endY, transition: { duration: 0.8 } } : { y: 0, transition: { duration: 0.8 } }
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

export default SlideRightAnimation;