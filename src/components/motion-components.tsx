
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const FadeInWhenVisible = ({ 
  children, 
  className = "", 
  delay = 0.25, 
  once = true,
  direction = "up"
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 50, x: 0 };
      case "down": return { y: -50, x: 0 };
      case "left": return { y: 0, x: 50 };
      case "right": return { y: 0, x: -50 };
      case "none": return { y: 0, x: 0 };
      default: return { y: 50, x: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        ...getDirectionOffset(),
        transition: { 
          duration: 0.8, 
          ease: [0.25, 0.1, 0.25, 1.0],
          delay: delay
        }
      });
    }
  }, [isInView, controls, delay, direction]);

  const offset = getDirectionOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren = ({ 
  children, 
  className = "", 
  delay = 0, 
  once = true 
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: 0.2
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ 
  children, 
  delay = 0
}: { 
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};
