import { FadeUp } from "@/components/animations"
import { Container, Typography, Paragraph } from "@/components"
import Image from "next/image"
import { stakes } from "@/constants"

export default function StakeSection() {
  return (
    <section id="stake">
      <Container>
        <FadeUp>
          <Typography
            variant="lg"
            className="
              pb-8 
              text-center 
              md:text-left 
              whitespace-nowrap
            "
          >
            Stake
          </Typography>
        </FadeUp>

        <div className="flex justify-center p-10">
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              gap-5 
              lg:gap-10
            "
          >
            {stakes?.map(({ id, image, title, description, description2, description3 }) => (
              <StakeCard key={id} image={image} title={title} description={description} description2={description2} description3={description3} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function StakeCard({ image, title, description, description2, description3 }) {
  return (
    <FadeUp
      className="
        flex
        flex-col
        items-center
        gap-5
        p-10
        bg-[#091126]
        rounded-lg
      "
    >
      <div className="text-center">
        <Typography variant="sm" className="md:whitespace-nowrap">
          {title}
        </Typography>
      </div>

      <div>
        <Image src={image} alt={title} width={257} height={313} className="object-contain" />
      </div>

      <div>
        <Paragraph variant="md" className="text-justify">
          {description}
        </Paragraph> <br />
        <Paragraph variant="md" className="text-justify">
          {description2}
        </Paragraph> <br />
        <Paragraph variant="md" className="text-justify">
          {description3}
        </Paragraph>
      </div>
    </FadeUp>
  )
}
