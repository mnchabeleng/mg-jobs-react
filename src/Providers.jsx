import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ReactQueryDevtools } from 'react-query/devtools'

const graphqlClient = new ApolloClient({
  uri: 'https://staging-jobsmgco-staging.kinsta.cloud/graphql',
  cache: new InMemoryCache(),
})

const queryClient = new QueryClient()

export default function Providers({ children }) {
  return (
    <>
        <QueryClientProvider client={ queryClient }>
            <ApolloProvider client={ graphqlClient }>
              <HelmetProvider>
                  { children }
              </HelmetProvider>
            </ApolloProvider>
            <ReactQueryDevtools initialIsOpen={ false } position='bottom-right' />
        </QueryClientProvider>
    </>
  )
}
