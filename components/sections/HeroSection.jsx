import { FadeUp, Press } from "@/components/animations"
import { Container, GradientAround, Button } from "@/components"

export default function HeroSection() {
  return (
    <section id="home">
      <Container
        className="
          relative
          bg-[url('/images/home_bg.png')] 
          bg-no-repeat
          bg-right
          bg-cover
          md:bg-center
          md:bg-cover
          overflow-x-hidden
        "
      >
        <GradientAround top right bottom left />

        <div
          className="
            flex
            flex-col
            justify-end
            md:flex-row
            py-20
            pb-40
            md:py-40
          "
        >
          <div
            className="
              w-full 
              md:w-1/2 
              md:translate-x-10 
              text-center 
              md:text-left 
              drop-shadow-[0_0_10px_#000]
            "
          >
            <FadeUp className="uppercase font-brand">
              <div className="text-5xl  md:text-6xl md:-translate-x-[4.3rem]">Portal of</div>
              <div className="text-8xl md:text-9xl">Truth</div>
            </FadeUp>
            <FadeUp className="text-xl -translate-y-4 md:translate-x-16 drop-shadow-[0_0_10px_#000]">
              <p className="md:-translate-x-[-1rem]">Are you worthy enough?</p>
            </FadeUp>

            <FadeUp>
              <Press className="pt-10 md:-translate-x-[12rem]">
                <a href="https://www.subber.xyz/portaloftruth/wallet-collection/portal-of-truth-join-waitlist" target="_blank">
                  <Button>Join Waitlist</Button>
                </a>
              </Press>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  )
}
