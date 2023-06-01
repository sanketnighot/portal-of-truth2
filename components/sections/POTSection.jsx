import { FadeUp, Press } from "@/components/animations"
import { Container, Typography, Paragraph, Button, GradientAround } from "@/components"

export default function POTSection() {
  return (
    <section id="portal">
      <Container
        className="
          relative
          bg-[url('/images/pot_bg.png')]
          bg-no-repeat
          bg-cover
          bg-center
          md:bg-[length:98%]
          md:bg-right-bottom
        "
      >
        <GradientAround right />
        <div
          className="
            py-20 
            pb-40 
            text-center 
            md:text-left 
            w-full 
            md:w-1/2
          "
        >
          <FadeUp>
            <Typography variant="lg">
              PORTAL OF
              <br />
              TRUTH
            </Typography>
          </FadeUp>

          <FadeUp
            className={`
              mx-auto 
              md:m-0 
              max-w-lg 
              flex 
              flex-col 
              gap-5 
              items-center 
              pb-10
            `}
          >
            <Paragraph>
              Welcome to the revolutionary NFT experience of Portal of Truth, where you have the power to upgrade your NFTs and unlock their full potential. With each upgrade, your NFTs become more powerful, generate greater yields, and increase in value, making them a valuable asset in the NFT world.
            </Paragraph>

            <Paragraph>
              For upgrading your NFT’s, one has to open the Portal of Truth, for which you will need 1 Elixir Nft and some Silk, which can be attained by staking your P.O.T NFTs. You can stake your NFTs in Silk contract to earn silk(erc-20), or in Portion contract to earn potions like Elixir(erc-1155) and Immortal(erc-1155), among others.
            </Paragraph>

            <Paragraph>
              With 7 levels of upgrades available, each level more powerful than the last, you can enhance your NFTs to the level of royalty. If you reach level 6 or above, you can even earn a monthly royalty, proving your worth and status as a player.
            </Paragraph>

            {/* <Paragraph>
              And that's not all! You can engage in exciting PvP battles with other players to win more NFTs and tokens. The higher your NFT level, the more valuable it becomes, making Portal of Truth a game that's not only fun but also financially rewarding. Join us now and embark on a journey of discovery and power.
            </Paragraph> */}
          </FadeUp>

          {/* <Press
            className="
              flex 
              justify-center 
              md:justify-start 
              md:pl-8
            "
          >
            <a href="https://portal-of-truth.gitbook.io/portal-of-truth-whitepaper/" target="_blank"><Button>Whitepaper</Button></a>
          </Press> */}
        </div>
      </Container>
    </section>
  )
}
