import { useQuery } from 'react-query'
import fetchData from '../../helpers/fetchData'

const {
    VITE_REACT_MG_JOBS_WP_API,
    VITE_REACT_MG_JOB_ID,
    VITE_REACT_MG_TENDER_ID
} = import.meta.env

export const useQueryOptions = {
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
}

export function fetchMgJobs(perPage) {
    const jobsUrl = `${ VITE_REACT_MG_JOBS_WP_API }/jobs?_embed&per_page=${ perPage }&job_types=${ VITE_REACT_MG_JOB_ID }`
    return useQuery(['mg-jobs-api-data', jobsUrl], fetchData, useQueryOptions)
}

export function fetchMgTenders(perPage) {
    const tendersUrl = `${ VITE_REACT_MG_JOBS_WP_API }/jobs?_embed&per_page=${ perPage }&job_types=${ VITE_REACT_MG_TENDER_ID }`
    return useQuery(['mg-tenders-api-data', tendersUrl], fetchData, useQueryOptions)
}

export function fetchMgListings(perPage, urlQueries) {
    const {
        page,
        keyword,
        sector,
        region,
        type
    } = urlQueries

    const search = keyword ? `&search=${ keyword }` : ''
    const jobTypes = type ? `&job_types=${ type }` : ''

    const queries =`&page=${ page }${ search }${ jobTypes }`
    
    const listingsUrl = `${ VITE_REACT_MG_JOBS_WP_API }/jobs?_embed&per_page=${ perPage }${ queries }`
    return useQuery(['mg-listings-api-data', listingsUrl], fetchData, useQueryOptions)
}

export function fetchMgListing(listingSlug) {
    const listingUrl = `${ VITE_REACT_MG_JOBS_WP_API }/jobs?_embed&slug=${ listingSlug }`
    return useQuery(['mg-single-listing-api-data', listingUrl], fetchData, useQueryOptions)
}

export function fetchMgListingMedia(mediaId) {
    const mediaUrl = `${ mgJobsApiUrl }/media/${ mediaId }`
    return useQuery(['mg-listing-media-api-data', mediaUrl], fetchData, {
        ...useQueryOptions,
        enabled: !!mediaId
    })
}

export function fetchMgJobsSectors() {
    const sectorsUrl = `${ VITE_REACT_MG_JOBS_WP_API }/job_sectors?orderby=count`
    return useQuery(['mg-job-sectors-api-data', sectorsUrl], fetchData, useQueryOptions)
}

export function fetchMgJobsLocations() {
    return ''
}

export function fetchMgSimilarListings(tags) {
    return ''
}