import { ThemeProvider, CSSReset,  } from '@chakra-ui/react'
import theme from '../theme';
import { DAppProvider, Config } from "@usedapp/core";
import { Header } from '../components/main/Header';
import { Footer } from '../components/main/Footer';
import {node_network_id, node_url} from '../utils/constants';
import "../theme/style.css";

const config: Config = {
  readOnlyChainId: node_network_id,
  readOnlyUrls: {
    [node_network_id]: node_url,
  },
  supportedChains: [node_network_id],

}

function MyApp({ Component, pageProps }: any) {
  return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <DAppProvider config={config}>
          <Header />
          <main className="page-main">
            <Component {...pageProps} />
          </main>
          <Footer />
        </DAppProvider>
      </ThemeProvider>
  )
}

export default MyApp
