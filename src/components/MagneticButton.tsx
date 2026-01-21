import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "gold";
}

export const MagneticButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-light",
    secondary: "bg-cream text-primary border-2 border-primary hover:bg-cream-dark",
    gold: "bg-gradient-to-r from-gold to-gold-light text-primary-dark",
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-full font-medium text-sm md:text-base
        transition-all duration-300 ease-out overflow-hidden
        ${variantStyles[variant]}
        ${isHovered ? "shadow-gold" : "shadow-soft"}
        ${className}
      `}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-gold opacity-0 rounded-full"
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {isHovered && (
        <motion.span
          className="absolute inset-0 border-2 border-gold/40 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.button>
  );
};
