import Hero from "./Hero"
import FeaturesMain from "./Features"
import Footer from "./Footer"
import SocialMedia from "./SocialMedia"
import Values from "./Values"
import { Box } from "@chakra-ui/react"

export const App = () => (
  <Box>
    <Hero />
    <FeaturesMain/>
    <Values/>
    <SocialMedia/>
    <Footer/>
  </Box>
)
