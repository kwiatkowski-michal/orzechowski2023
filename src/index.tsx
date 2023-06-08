import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import '@fontsource-variable/manrope';

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const colors = {
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

