type ButtonProps = {
  className?: string,
  children: React.ReactNode
}

export function Button({ className, children }: ButtonProps) {
  return <button className={`button ${className}`}>{children}</button>;
}
