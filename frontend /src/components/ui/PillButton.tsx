"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export default function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  showArrow = true,
  className = "",
  type = "button",
}: PillButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 group cursor-pointer";

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles = {
    primary:
      "bg-[#155DFC] text-white shadow-sm transition-colors hover:bg-[#0F4BD8] hover:shadow-md",
    secondary:
      "bg-white text-[#07162F] border border-[#E4EAF5] hover:border-[#155DFC] hover:text-[#155DFC] shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-[#07162F] border-2 border-[#07162F] hover:bg-[#07162F] hover:text-white",
    dark: "bg-[#07162F] text-white hover:bg-[#0B1026] shadow-sm hover:shadow-md",
  };

  const arrowSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className={`${arrowSizes[size]} rounded-full flex items-center justify-center ${
            variant === "primary" || variant === "dark"
              ? "bg-white/20"
              : "bg-[#07162F] group-hover:bg-white/20"
          } transition-colors`}
        >
          <ArrowUpRight
            className={`${
              size === "sm" ? "w-3 h-3" : size === "md" ? "w-3.5 h-3.5" : "w-4 h-4"
            } ${
              variant === "primary" || variant === "dark"
                ? "text-white"
                : "text-white group-hover:text-white"
            } transition-colors`}
          />
        </span>
      )}
    </>
  );

  const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <MotionWrapper>{content}</MotionWrapper>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      <MotionWrapper>{content}</MotionWrapper>
    </button>
  );
}
