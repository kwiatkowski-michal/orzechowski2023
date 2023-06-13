import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"
import '@fontsource-variable/manrope';

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
    100: '#339933',
    200: '#33CC33'
}
}

const fonts = { 
  heading: 'Manrope Variable',
  body: 'Manrope Variable'
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
