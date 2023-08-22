import Hero from "./Hero"
import FeaturesMain from "./Features"
import Footer from "./Footer"
import SocialMedia from "./SocialMedia"
import Values from "./Values"
import { Box } from "@chakra-ui/react"
import WithAction from "./Navbar"

export const App = () => (
  <Box>
    <WithAction/>
    <Hero />
    <FeaturesMain/>
    <Values/>
    <SocialMedia/>
    <Footer/>
  </Box>
)
