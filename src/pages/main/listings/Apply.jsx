import MainLayout from '../../../layouts/MainLayout'

import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'

import ListingApplyForm from '../../../components/main/listings/ApplyForm'

const {
    VITE_REACT_MG_JOBS_WP_API: jobsApiUrl,
    VITE_REACT_MG_JOBS_ID: jobsId
} = import.meta.env

async function fetchData({ queryKey }) {
    /*
    const url = queryKey[1]
    return axios.get(url)
            .then(response => response.data)
            .catch(error => error)
    */
   return 'fresh data'
}

export default function ListingApplyPage() {
    const { listingSlug } = useParams()
    const queryClient = useQueryClient()

    const listingUrl = `${ jobsApiUrl }/mg_jobs?slug=${ listingSlug }`
    const {
        data,
        error,
        isError,
        isLoading,
        isFetching
    } = useQuery(['listing-details-apply-api-data', listingUrl], fetchData, {
        initialData: () => {
            /*
            const listingDetails = queryClient.getQueryData('listing-details-api-data')?.data

            if(listingDetails) {
                return listingDetails
            }
            */
            return 'initial data'
        }
    })

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error! { error.message }</div>
    }

    if(data) {
        console.log(data)
    }

    return (
        <MainLayout title='Apply'>
            <section>
                <div className='container'>
                    <div className='section-header'>
                        <h1 className='page-title'>Apply for a job</h1>
                    </div>
                    <ListingApplyForm />
                </div>
            </section>
        </MainLayout>
    )
}