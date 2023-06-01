import Image from "next/image"
import { Press } from "@/components/animations"

export default function Button({ children }) {
  return (
    <Press>
      <div className="relative flex justify-center md:scale-125">
        <Image src="/images/btn.svg" width={250} height={115} alt="Button" priority />
        <div className="absolute top-1/2 -translate-y-1/2 font-brand text-xl uppercase">{children}</div>
      </div>
    </Press>
  )
}
