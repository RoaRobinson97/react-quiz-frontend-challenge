import {createHttpLink, ApolloClient, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || 'https://react-quiz.jobs.pyr.sh/graphql',
})

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token')

  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  }
})

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  defaultOptions: {
    // Default to ignore so that protected queries don't error out after signout
    query: {errorPolicy: 'ignore'},
    watchQuery: {errorPolicy: 'ignore'},
  },
  link: authLink.concat(httpLink),
})
