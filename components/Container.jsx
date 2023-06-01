"use client"

export default function Container({ children, className }) {
  return (
    <div
      className={`
        mx-auto
        px-5
        md:px-12 
        w-full
        lg:container
        ${className}
      `}
    >
      {children}
    </div>
  )
}
