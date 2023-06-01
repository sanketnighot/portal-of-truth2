import Head from "next/head"
import { Poppins } from "next/font/google"

import { ClientOnly, Navbar, Footer } from "@/components"
import {
  HeroSection,
  VideoSection,
  POTSection,
  StakeSection,
  AboutSection,
  CollectionSection,
  RoadmapSection,
  FAQSection,
} from "@/components/sections"

const inter = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal of Truth</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>

        <div className="pt-20 xl:pt-32"></div>
        <div className="text-white">
          <ClientOnly>
            <HeroSection />
          </ClientOnly>

          <ClientOnly>
            <VideoSection />
          </ClientOnly>

          <ClientOnly>
            <POTSection />
          </ClientOnly>

          {/* <ClientOnly>
            <AboutSection />
          </ClientOnly>

          <ClientOnly>
            <StakeSection />
          </ClientOnly> */}

          <ClientOnly>
            <CollectionSection />
          </ClientOnly>

          <ClientOnly>
            <RoadmapSection />
          </ClientOnly>

          {/* <ClientOnly>
            <FAQSection />
          </ClientOnly> */}

          <ClientOnly>
            <Footer />
          </ClientOnly>
        </div>
      </main>
    </>
  )
}
