import { Urbanist } from "next/font/google"

const urbanist = Urbanist({
  subsets: ["latin"],
})

export default function Paragraph({ children, variant = "md", className }) {
  return (
    <p
      className={`
      text-sm
      ${variant === "sm" ? "md:text-sm" : ""}
      ${variant === "md" ? "md:text-base" : ""}
      ${variant === "lg" ? "md:text-lg" : ""}
      ${urbanist.className}
      ${className}
    `}
    >
      {children}
    </p>
  )
}
