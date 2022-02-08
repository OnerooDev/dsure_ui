import { ThemeProvider, CSSReset,  } from '@chakra-ui/react'
import theme from '../theme';
import { DAppProvider, Config } from "@usedapp/core";
import {node_network_id} from '../utils/constants';
import "../theme/style.css";

const config: Config = {
  readOnlyChainId: node_network_id,
  supportedChains: [node_network_id],

}

function MyApp({ Component, pageProps }: any) {
  return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <DAppProvider config={config}>
          <main className="page-main">
            <Component {...pageProps} />
          </main>
        </DAppProvider>
      </ThemeProvider>
  )
}

export default MyApp
