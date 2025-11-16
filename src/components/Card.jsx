export default function Card({ title, description, children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      )}
      {description && (
        <p className="text-secondary mb-4">{description}</p>
      )}
      {children}
    </div>
  )
}

