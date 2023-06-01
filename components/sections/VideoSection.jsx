import ReactPlayer from "react-player"

import { FadeUp } from "@/components/animations"
import { Container, GradientAround, Typography } from "@/components"

export default function VideoSection() {
  return (
    <Container
      className="
        relative
        bg-[url('/images/video_bg.png')]
        bg-no-repeat
        bg-right
        bg-cover
        sm:bg-[length:60%]
      "
    >
      <GradientAround top right bottom />
      <section
        className="
            py-32 
            flex 
            flex-col 
            items-center
        "
      >
        <FadeUp>
          <Typography variant="md" className="pb-10 text-center">
            Do you Think He's Worthy?
          </Typography>
        </FadeUp>

        <div className="relative w-full flex flex-col items-center">
          <FadeUp
            className="
                border-4
                border-blue-700
                bg-brand-blue-dark
                rounded-2xl 
                overflow-hidden 
                aspect-video
                w-[240px]
                min-[425px]:w-[360px]
                md:w-[540px]
                lg:w-[720px]
            "
          >
            <ReactPlayer
              url="https://youtu.be/6EOUCEAk8hw"
              width="100%"
              height="100%"
            // controls
            />
          </FadeUp>

          <FadeUp
            className="
              relative 
              pt-5 
              text-center 
              md:absolute 
              md:right-2 
              md:top-1/2 
              md:-translate-y-1/2
            "
          >
          </FadeUp>
        </div>
      </section>
    </Container>
  )
}
