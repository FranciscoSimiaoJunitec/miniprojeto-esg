import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MoveUpAnimationProps {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
}

const MoveUpAnimation: React.FC<MoveUpAnimationProps> = ({ direction, children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { y: direction === 'up' ? 20 : 20 },
    visible: { y: -200, transition: { duration: 0.8 } }
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

export default MoveUpAnimation;