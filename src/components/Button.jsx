import Link from 'next/link'

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "",
  type = "button"
}) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center"
  
  const variants = {
    primary: "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg",
    secondary: "bg-accent/20 text-accent hover:bg-accent/30 border border-accent/30",
    outline: "border-2 border-secondary text-secondary hover:bg-primary"
  }

  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

