import MainLayout from '../../../layouts/MainLayout'
import MainSidebarLayout from '../../../layouts/MainSidebarLayout'

import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useQueryOptions } from '../../../config'

import ListingDetailsHeader from '../../../components/main/listings/details/Header'
import ListingDetailsBody from '../../../components/main/listings/details/Body'

const {
    VITE_REACT_MG_JOBS_WP_API: jobsApiUrl,
    VITE_REACT_MG_JOBS_ID: jobsId
} = import.meta.env

async function fetchData({ queryKey }) {
    const url = queryKey[1]
    return axios.get(url)
            .then(response => response.data)
            .catch(error => error)
}

export default function ListingDetailsPage() {
    const { listingSlug } = useParams()

    const listingUrl = `${ jobsApiUrl }/mg_jobs?_embed&slug=${ listingSlug }`
    const {
        data,
        error,
        isError,
        isLoading,
        isFetching
    } = useQuery(['listing-details-api-data', listingUrl], fetchData, useQueryOptions)

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error! { error.message }</div>
    }

    return (
        <MainSidebarLayout title={ data[0]?.title.rendered } description={ data[0]?.title.rendered }>
            <section className='px'>
                <div className='container'>
                    {
                        isFetching
                        ? <div>Loading...</div>
                        : <>
                            <ListingDetailsHeader data={ data[0] ?? [] } />
                            <ListingDetailsBody data={ data[0] ?? [] } />
                        </>
                    }
                </div>
            </section>
        </MainSidebarLayout>
    )
}