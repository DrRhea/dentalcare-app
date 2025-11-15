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
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
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

