import Link from "next/link"
import { Press } from "@/components/animations"
import { Container, Typography, Paragraph } from "@/components"
import { DiscordIcon, TwitterIcon } from "@/icons"
import { navs } from "@/constants"

export default function Footer() {
  return (
    <section id="footer">
      <Container
        className="
            relative
            flex
            flex-col
            items-center
        "
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Typography variant="sm">POT</Typography>
          </Link>
        </div>

        {/* NavLinks */}
        <div
          className="
            flex 
            flex-wrap 
            justify-center 
            gap-5 
            text-sm 
            xl:text-xl 
            py-5
          "
        >
          {navs?.map(({ id, item, link }) => (
            <Press key={id}>
              <Link href={link}>{item}</Link>
            </Press>
          ))}
        </div>

        <div
          className="
            lg:absolute 
            lg:right-10 
            lg:bottom-14 
            flex 
            gap-5 
            pb-3
          "
        >
          <Press>
            <a href="https://discord.gg/portaloftruth" target="_blank">
              <div
                className="
                flex 
                justify-center 
                items-center 
                w-16 
                h-16 
                bg-[url('/images/footer_icon_bg.png')] 
                bg-no-repeat 
                bg-[length:100%_100%]
              "
              >
                <DiscordIcon className="w-7 h-7" />
              </div>
            </a>
          </Press>

          <Press>
            <a href="https://twitter.com/Portal_of_Truth" target="_blank">
              <div
                className="
                flex 
                justify-center 
                items-center 
                w-16 
                h-16 
                bg-[url('/images/footer_icon_bg2.png')] 
                bg-no-repeat 
                bg-[length:100%_100%]
              "
              >
                <TwitterIcon className="w-7 h-7" />
              </div>
            </a>

          </Press>
        </div>

        {/* Line */}
        <div
          className="
            w-[90%] 
            h-0.5 
            rounded-full 
            bg-white/20
          "
        ></div>

        {/* Copyright */}
        <Paragraph variant="sm" className="text-[#D9DBE1] py-3">
          © 2022 Cyber Ronins. All rights reserved
        </Paragraph>
      </Container>
    </section>
  )
}
