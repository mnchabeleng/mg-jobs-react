import './assets/scss/style.scss'
import Providers from './Providers'
import PublicRoutes from './routes'

const graphQLUrl = 'https://staging-jobsmgco-staging.kinsta.cloud/graphql'

export default function App() {
  return (
    <>
      <Providers>
        <PublicRoutes />
      </Providers>
    </>
  )
}
