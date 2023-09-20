import Hero from "./Hero"
import FeaturesMain from "./Features"
import Footer from "./Footer"
import Values from "./Values"
import { Box, Skeleton } from "@chakra-ui/react"
import WithAction from "./Navbar"
import Akcje from "./Akcje"
import Navbar from "./newNavbar"


export const App = () => (
    <Box>
      <Navbar/>
    <Hero />
    <FeaturesMain/>
    <Values/>
    {/* <Akcje /> */}
    <Footer/>
  </Box>
)
