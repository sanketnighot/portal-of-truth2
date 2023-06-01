export default function Typography({ children, className, variant = "lg" }) {
  return (
    <h1
      className={`
            font-brand 
            uppercase
            ${variant === "sm" ? "text-3xl md:text-4xl" : ""}
            ${variant === "md" ? "text-4xl md:text-5xl" : ""}
            ${variant === "lg" ? "text-5xl lg:text-7xl" : ""}
            ${className}
        `}
    >
      {children}
    </h1>
  )
}
