import { FadeUp } from "@/components/animations"
import Image from "next/image"
import { Container, GradientAround, Typography } from "@/components"

export default function CollectionSection() {
  return (
    <section id="collection">
      <Container
        className="
            relative 
            bg-[url('/images/collection_bg.png')]
            /bg-right-bottom
            bg-cover
            bg-bottom
            py-40
        "
      >
        <GradientAround left right />
        <div className="absolute hidden lg:block ">
          <img
            src="/images/collection_nft.png"
            alt="imga"
            className="
              h-[400px] 
              mix-blend-lighten 
              -z-[1] 
              bg-brand-blue-dark
            "
          />
        </div>

        <FadeUp className="text-center">
          <Typography>Collection</Typography>
        </FadeUp>

        <div
          className="
            py-20  
            flex
            flex-col
            gap-5
          "
        >
          <div
            className="
              flex 
              flex-wrap 
              justify-center 
              md:justify-end 
              gap-5
            "
          >
            {[2, 1, 3].map((item, i) => (
              <FadeUp key={item + i}>
                <Image src={`/images/collection/${item}.png`} alt={"img-" + item} width={208} height={208} />
              </FadeUp>
            ))}
          </div>

          <FadeUp
            className="
              flex 
              gap-5 
              md:flex-nowrap 
              overflow-x-auto
            "
          >
            {[4, 5, 6, 7].map((item, i) => (
              <Image
                key={item + i}
                src={`/images/collection/${item}.png`}
                alt={"img-" + item}
                width={208}
                height={208}
                className="w-1/3 md:w-[208px] lg:w-[480px]"
              />
            ))}
          </FadeUp>
        </div>
      </Container>
    </section>
  )
}
