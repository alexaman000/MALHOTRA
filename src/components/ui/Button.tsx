import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black-main hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    secondary: "bg-white text-black-main hover:bg-gray-200",
    outline: "border border-gold text-gold hover:bg-gold hover:text-black-main",
    ghost: "text-white hover:text-gold bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
      )}
    </motion.button>
  );
};
