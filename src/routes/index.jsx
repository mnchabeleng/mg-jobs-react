import PageLoader from "../loaders/main/PageLoader";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages"));
const ListingsPage = lazy(() => import("../pages/main/listings"));
const ListingDetailsPage = lazy(() => import("../pages/main/listings/Details"));
const ListingApplyPage = lazy(() => import("../pages/main/listings/Apply"));
const Error404Page = lazy(() => import("../pages/Error404"));

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          } />

        <Route
          path="/listings"
          element={
            <Suspense fallback={<PageLoader />}>
              <ListingsPage />
            </Suspense>
          } />

        <Route
          path="/listings/:listingSlug"
          element={
            <Suspense fallback={<PageLoader />}>
              <ListingDetailsPage />
            </Suspense>
          } />

        <Route
          path="/listings/:listingSlug/apply"
          element={
            <Suspense fallback={<PageLoader />}>
              <ListingApplyPage />
            </Suspense>
          } />

        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <Error404Page />
            </Suspense>
          } />
      </Routes>
    </BrowserRouter>
  );
}
