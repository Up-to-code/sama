import Link from "next/link";


interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function Link_text({ href, children, className, ...props }: LinkProps) {
  return <Link href={href} className={className + " text-primary font-semibold underline"} {...props}>{children}</Link>;
}

export default Link_text;

