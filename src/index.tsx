import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"
import '@fontsource/poppins';

const container = document.getElementById("root")
if (!container) throw new Error('Błąd serwera. Zgłoś to na www.kwiatkowskimichal.tech');
const root = ReactDOM.createRoot(container)

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
}

const colors = {
  gray: {
    800: "#000"
  },
  brand: {
    100: '#e62846',
    200: '#0ea86a',
    300: "f6e9e5"
}
}

const fonts = { 
  heading: 'Poppins',
  body: 'Poppins'
}

const theme = extendTheme({colors, fonts, config})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)

serviceWorker.register()
