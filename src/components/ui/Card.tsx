function Card({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`bg-secondary rounded-lg p-4 ${className}`}>{children}</div>;
}

export default Card;
