import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/provider"

function MyApp({ Component, pageProps }: AppProps) {
  <ChakraProvider>
    return <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
