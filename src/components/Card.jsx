export default function Card({ title, description, children, className = "" }) {
  return (
    <div className={`bg-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-primary/20 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-accent mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-secondary mb-4">{description}</p>
      )}
      {children}
    </div>
  )
}

