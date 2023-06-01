import { FadeUp } from "@/components/animations"
import { Container, Typography, Paragraph, GradientAround } from "@/components"
import { phases } from "@/constants"

export default function RoadmapSection() {
  return (
    <section id="roadmap">
      <Container
        className="
            relative
            bg-[url('/images/roadmap_bg.png')]
            bg-cover
            bg-left
            py-20
        "
      >
        <GradientAround right />

        <FadeUp className="text-center">
          <Typography>Roadmap</Typography>
        </FadeUp>

        <div
          className="
            flex 
            flex-col 
            gap-10 
            py-10 
            md:py-20
          "
        >
          {phases?.map(({ id, phase, title, description }) => (
            <Phase key={id} phase={phase} title={title} description={description} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function Phase({ phase, title, description }) {
  return (
    <div className="flex md:px-20">
      {/* Phase */}
      <FadeUp className="w-2/5 md:w-1/2 relative">
        <div className="text-center">
          <Typography variant="md">{phase}</Typography>
        </div>

        <div
          className="
            dot 
            absolute 
            left-1/2 
            -translate-x-1/2 
            mt-3 
            w-3 
            h-3 
            rounded-full 
            bg-white 
            ring-4 
            ring-white/10
          "
        ></div>
        <div
          className="
            line 
            absolute 
            top-20 
            left-1/2 
            -translate-x-1/2 
            w-1 
            h-[85%] 
            last-of-type:h-[75%] 
            bg-blue-600/10 
            rounded-full
          "
        ></div>
      </FadeUp>

      {/* Card */}
      <FadeUp
        className="
            w-3/5 
            md:w-1/2
            max-w-[480px]
            p-8
            bg-brand-blue-dark/40
            backdrop-blur-sm
            rounded-lg
            border
            border-blue-600/40
            drop-shadow-xl
        "
      >
        <div>
          <Typography variant="sm">{title}</Typography>
        </div>

        <div className="pt-5">
          <Paragraph>{description}</Paragraph>
        </div>
      </FadeUp>
    </div>
  )
}
