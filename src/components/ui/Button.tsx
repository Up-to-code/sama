"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "tertiary";
}

function Button({
  children,
  onClick,
  className,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`  py-[6px] px-4 hover:opacity-80 transition-opacity duration-300 mx-2 font-semibold ${className}  ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "outline"
          ? "bg-transparent border border-primary text-primary"
          : "bg-transparent text-primary"
      }`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

export default Button;
