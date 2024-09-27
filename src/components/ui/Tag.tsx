interface TagProps {
  children: React.ReactNode;
  className?: string;
}

function Tag({ children, className }: TagProps) {
  return (
    <div className={`bg-secondary text-primary px-2 py-1 m-1  ${className}`}>
      {children}
    </div>
  )
}

export default Tag