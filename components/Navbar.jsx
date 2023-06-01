import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

import { Container, Typography } from "@/components"
import { MenuIcon } from "@/icons"
import { Press } from "@/components/animations"
import { navs } from "@/constants"
import { DiscordIcon, TwitterIcon } from "@/icons"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const path = router.asPath

  return (
    <>
      <header
        className={`
          fixed 
          w-full 
          z-10 
          text-white 
          ${menuOpen
            ? "backdrop-blur-md bg-brand-blue-dark/50"
            : " bg-gradient-to-b from-brand-blue-dark via-brand-blue-dark/80 to-transparent"
          }`}
      >
        {/* Computer Menu */}
        <Container className="py-5">
          <div className="flex justify-between z-[2]">
            {/* Logo */}
            <div>
              <Link href="/">
                <Typography variant="sm">POT</Typography>
              </Link>
            </div>

            {/* NavLinks */}
            <div
              className="
                hidden 
                md:flex 
                items-center 
                gap-10 
                text-sm 
                xl:text-xl
              "
            >
              {navs?.map(({ id, item, link }) => (
                <Press key={id}>
                  <Link href={link} className={path === link ? "font-bold text-brand-purple" : ""}>
                    {item}
                  </Link>
                </Press>
              ))}
              <Press key={8}>
                <Link href="https://discord.gg/portaloftruth" target="_blank">
                  <DiscordIcon />
                </Link>
              </Press>

              <Press key={9}>
                <Link href="https://twitter.com/Portal_of_Truth" target="_blank">
                  <TwitterIcon />
                </Link>
              </Press>
            </div>

            {/* Navbar Buttons */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen((prev) => !prev)}>
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <MobileMenu menuOpen={menuOpen} path={path} />
      </header>
    </>
  )
}

function MobileMenu({ menuOpen, path }) {
  return (
    <div
      className={`
        w-full 
        md:hidden 
        z-[1] 
        ${menuOpen ? "relative translate-y-0" : "absolute -translate-y-[100vh]"}
      `}
    >
      <div className="flex flex-col text-sm">
        {navs?.map(({ id, item, link }) => (
          <Link
            href={link}
            className={`
              w-full 
              text-center 
              p-4 
                hover:bg-brand-blue-dark/40 
                ${path === link ? "font-bold text-brand-purple" : ""}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}
