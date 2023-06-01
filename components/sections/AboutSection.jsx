import { FadeUp } from "@/components/animations"
import { Container, Typography, Paragraph, GradientAround } from "@/components"

export default function AboutSection() {
  return (
    <section id="about">
      <Container
        className="
          relative
          py-20
          bg-[url('/images/about_bg_unrev.jpg')]
          bg-no-repeat
          bg-[length:100%]
          md:bg-cover
          bg-center
        "
      >
        <GradientAround top right bottom />

        <FadeUp className="text-center">
          <Typography variant="lg">Earn</Typography>
        </FadeUp>

        <FadeUp
          className="
            w-full 
            md:w-2/3 
            py-6 
            md:pt-28 
            text-center 
            md:text-left
          "
        >
          <Typography variant="md" className="pb-5">
            There are many ways
            <br />
            to Earn if
            <br />
            you are "worthy"
          </Typography>

          <p
            className="
              px-5 
              sm:px-20 
              md:px-0 
              text-sm 
              md:text-lg
            "
          >
            where the possibilities for earning are endless. Once you've purchased your very own NFT, the real adventure
            begins. With your trusty creature by your side, you'll embark on a quest to unlock its full potential and
            earn rewards along the way.
          </p>
        </FadeUp>

        <FadeUp
          className="
            bg-[url('/images/about_rectangle.png')] 
            bg-no-repeat 
            bg-[length:100%_100%] 
            flex 
            flex-col 
            gap-5 
            p-5 
            md:p-10
          "
        >
          <Paragraph variant="md">
            1. Upgrading: You can instantly increase the value of your NFTs by upgrading them to higher levels, which also increases their staking yields.
          </Paragraph>

          <Paragraph variant="md">
            2. Staking in the Potion Contract: By staking your P.O.T NFTs, you can generate other valuable NFTs like Elixir NFTs, Immortal NFTs, and other rare NFTs that can be used to upgrade your NFTs or sold in the secondary market.
          </Paragraph>

          <Paragraph variant="md">
            3. Staking in the Silk Contract: By staking your P.O.T NFTs, you can earn ERC-20 tokens called "Silk," which can be used to open the Portal of Truth or buy Elixir NFTs, Immortal NFTs, and other rare NFTs that can be sold for profit in the secondary market.
          </Paragraph>

          <Paragraph variant="md">
            4. Selling Potions in secondary market: You can even sell your Elixir, Immortal NFTs on Opensea and other secondary market to make a steady income flow.
          </Paragraph>

          <Paragraph variant="md">
            5. Royalty Levels: If you reach level 6 or 7, you will earn a monthly royalty without doing anything else.
          </Paragraph>

          <Paragraph variant="md">
            6. PvP Battles: Make your NFTs stronger by Levelling them up and winning battles against other players to earn P.O.T and other collection NFTs.
            You can EVEN choose other collection NFT's as collateral in PVP. whoever wins the rounds will automatically get the NFT used as collateral.
          </Paragraph>
        </FadeUp>
      </Container>
    </section>
  )
}
