import { useQuery } from 'react-query'
import fetchData from '../../helpers/fetchData'

export function fetchMgJobs() {
    const jobsUrl = 'https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&per_page=8&mg-job-types=4,5'
    return useQuery(['mg-jobs-api-data', jobsUrl], fetchData, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false
    })
}

export function fetchMgTenders() {
    const tendersUrl = 'https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&per_page=4&mg-job-types=8'
    return useQuery(['mg-tenders-api-data', tendersUrl], fetchData, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false
    })
}

export function fetchMgListings() {
    const listingsUrl = 'https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg-jobs?_embed&per_page=16'
    return useQuery(['mg-listings-api-data', listingsUrl], fetchData, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false
    })
}

export function fetchMgListing(slug) {
    return ''
}

export function fetchMgSimilarListings(tags) {
    return ''
}