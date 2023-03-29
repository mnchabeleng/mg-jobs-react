import { useQuery } from 'react-query'
import fetchData from '../../helpers/fetchData'

export const useQueryOptions = {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
}

export function fetchMgJobs(perPage) {
    const jobsUrl = `https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&per_page=${ perPage }&mg-job-types=4,5`
    return useQuery(['mg-jobs-api-data', jobsUrl], fetchData, useQueryOptions)
}

export function fetchMgTenders(perPage) {
    const tendersUrl = `https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&per_page=${ perPage }&mg-job-types=8`
    return useQuery(['mg-tenders-api-data', tendersUrl], fetchData, useQueryOptions)
}

export function fetchMgListings(perPage) {
    const listingsUrl = `https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&per_page=24`
    return useQuery(['mg-listings-api-data', listingsUrl], fetchData, useQueryOptions)
}

export function fetchMgListing(listingSlug) {
    const listingUrl = `https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&slug=${ listingSlug }`
    return useQuery(['mg-single-listing-api-data', listingUrl], fetchData, useQueryOptions)
}

export function fetchListingAttachment(attachmentId) {

}

export function fetchMgSimilarListings(tags) {
    return ''
}