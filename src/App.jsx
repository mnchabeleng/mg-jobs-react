import './assets/scss/app.scss'
import PageLoader from './loaders/main/PageLoader'
import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom'

const LazyHomePage = lazy(() => import('./pages/main/Home'))
const LazyListingsPage = lazy(() => import('./pages/main/listings'))
const LazyListingDetailsPage = lazy(() => import('./pages/main/listings/Details'))
const LazyListingApplyPage = lazy(() => import('./pages/main/listings/Apply'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={ <Suspense fallback={ <PageLoader /> }><LazyHomePage /></Suspense> } />

        <Route
          path='/listings'
          element={ <Suspense fallback={ <PageLoader /> }><LazyListingsPage /></Suspense> } />

        <Route
          path='/listings/:listingSlug'
          element={ <Suspense fallback={ <PageLoader /> }><LazyListingDetailsPage /></Suspense> } />

        <Route
          path='/listings/:listingSlug/apply'
          element={ <Suspense fallback={ <PageLoader /> }><LazyListingApplyPage /></Suspense> } />
      </Routes>
    </BrowserRouter>
  )
}
