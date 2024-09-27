function Text({
  children,
  size,
  className,
  direction = "rtl",
}: {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  className?: string;
  direction?: "ltr" | "rtl";
}) {
  return <p className={`text-${size} text-primary ${className} ${direction === "rtl" ? "text-right" : "text-left"}`}>{children}</p>;
}

export default Text;
