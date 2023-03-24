import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function Providers({ children }) {
    return (
        <QueryClientProvider client={ queryClient }>
            <HelmetProvider>
                { children }
            </HelmetProvider>
            <ReactQueryDevtools initialIsOpen={ false } position='bottom-right' />
        </QueryClientProvider>
    )
}