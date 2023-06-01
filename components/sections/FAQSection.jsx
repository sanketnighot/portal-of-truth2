import { useState } from "react"
import { FadeUp } from "@/components/animations"
import { Container, Typography, Accordion } from "@/components"
import { accordions } from "@/constants"

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="faq">
      <Container
        className="
          bg-[url('/images/faq_bg.png')]
          bg-no-repeat
          bg-cover
          md:bg-contain
          bg-bottom
          py-20
        "
      >
        <FadeUp className="text-center">
          <Typography>FAQ's</Typography>
        </FadeUp>

        <div className="sm:px-20 py-10 my-10 space-y-3">
          {accordions?.map(({ id, title, body, body2, body3, body4, body5, body6 }, i) => (
            <FadeUp key={id}>
              <Accordion title={title} body={body} body2={body2} body3={body3} body4={body4} body5={body5} body6={body6} i={i} expanded={expanded} setExpanded={setExpanded} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
} 
