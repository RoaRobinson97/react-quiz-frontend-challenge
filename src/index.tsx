import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {ApolloProvider} from '@apollo/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ColorModeScript, ChakraProvider, ThemeConfig, extendTheme} from '@chakra-ui/react'

import {client} from '@/graphql/apollo'
import {store} from '@/store'
import App from '@/router'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}
const theme = extendTheme({
  config,
})

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
