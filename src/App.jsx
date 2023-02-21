import './assets/scss/app.scss'
import {
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom'

import HomePage from './pages/main/Home'
import ListingsPage from './pages/main/listings'
import ListingDetailsPage from './pages/main/listings/Details'
import ListingApplyPage from './pages/main/listings/Apply'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path='/listings' element={ <ListingsPage /> } />
        <Route path='/listings/:listingSlug' element={ <ListingDetailsPage /> } />
        <Route path='/listings/:listingSlug/apply' element={ <ListingApplyPage /> } />
      </Routes>
    </BrowserRouter>
  )
}
