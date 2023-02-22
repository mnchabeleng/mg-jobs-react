import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    <ReactQueryDevtools initialIsOpen={ false } position='bottom-right' />
    </QueryClientProvider>
  </React.StrictMode>,
)