import Hero from "./Hero"
import FeaturesMain from "./Opis"
import Footer from "./Footer"
import Values from "./Program"
import { Box } from "@chakra-ui/react"
import Akcje from "./Akcje"
import Navbar from "./newNavbar"


export const App = () => (
  <Box>
    <Navbar />
    <Hero />
    <FeaturesMain />
    <Values />
    {/* <Akcje /> */}
    <Footer />
  </Box>
)
