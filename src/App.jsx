import './assets/scss/app.scss'
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
          element={ <Suspense fallback={ <div>Loading...</div> }><LazyHomePage /></Suspense> } />

        <Route
          path='/listings'
          element={ <Suspense fallback={ <div>Loading...</div> }><LazyListingsPage /></Suspense> } />

        <Route
          path='/listings/:listingSlug'
          element={ <Suspense fallback={ <div>Loading...</div> }><LazyListingDetailsPage /></Suspense> } />

        <Route
          path='/listings/:listingSlug/apply'
          element={ <Suspense fallback={ <div>Loading...</div> }><LazyListingApplyPage /></Suspense> } />
      </Routes>
    </BrowserRouter>
  )
}
