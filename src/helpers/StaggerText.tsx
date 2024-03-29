import { motion } from 'framer-motion';
import React from 'react';
interface StaggerTextProps {
  children: React.ReactNode;
}
export const StaggerText = (props: StaggerTextProps) => {
  const { children } = props;
  const content = children!.toString();
  const contentWords = content.split(' ');
  const duration = contentWords.length * 0.032;

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.024,
        duration: duration,
        delayChildren: 0.3,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  };

  const childVariant = {
    hidden: { opacity: 0, x: 3 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration / 2,
        ease: [0.5, 0, 0.2, 0.5]
      }
    }
  };

  return (
    <motion.span variants={parentVariant} initial="hidden" whileInView="show">
      {contentWords.map((word, index) => {
        return (
          <motion.span key={index} variants={childVariant}>
            {`${word} `}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
