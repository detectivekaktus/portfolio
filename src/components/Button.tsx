type ButtonProps = {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}
