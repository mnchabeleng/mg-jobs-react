import MainLayout from '../../../layouts/MainLayout'
import heroBgImage from '../../../assets/img/johannesburg-cbd.jpg'

import axios from 'axios'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { useQueryOptions } from '../../../config'

import Search from '../../../components/main/listings/search'
import Listings from '../../../components/main/listings'
import ListingsPaginaite from '../../../components/main/listings/Paginate'

import ListingsLoader from '../../../loaders/main/listings/Index'

async function fetchListsings() {
    return axios.get(`https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg_jobs?_embed&per_page=20`)
            .then(response => response.data)
            .catch(error => error)
}

async function fetchData({ queryKey }) {
    const url = queryKey[1]
    return axios.get(url)
            .then(response => response.data)
            .catch(error => error)
}

const title = 'Listings'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

export default function ListingsPage() {
    const [searchParams] = useSearchParams()

    const listingsKeyword = searchParams.get('keyword')
                         ? `&search=${ searchParams.get('keyword') }`
                         : ''

    const ListingsCategory = searchParams.get('category')
                         ? `&mg_job_categories=${ searchParams.get('category') }`
                         : ''

    const ListingsLocation = searchParams.get('location')
                         ? `&mg_job_locations=${ searchParams.get('location') }`
                         : ''

    const listingsTypes = searchParams.get('type')
                         ? `&mg_job_types=${ searchParams.get('type') }`
                         : ''

    const urlQueries = `_embed&per_page=20${ listingsKeyword + ListingsCategory + ListingsLocation + listingsTypes }`
    const listingsUrl = `https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/mg_jobs?${ urlQueries }`
    const {
            data,
            error,
            isError,
            isLoading,
            isFetching
        } = useQuery(['listings-api-data', listingsUrl], fetchData, useQueryOptions)

    if(isLoading) {
        return <div className='page-loader'>Loading...</div>
    }

    if(isError) {
        return <div>Error! { error.message }</div>
    }

    const heroStyles = {
        backgroundImage: `url(${ heroBgImage })`,
    }

    return (
        <MainLayout title={ title } description={ description }>
            <section>
                <div
                    style={ heroStyles }
                    className='hero'>
                    <div className='container'>
                        <h1 className='hero-title'>{ title }</h1>
                        <p className='hero-description'>{ description }</p>
                        <Search />
                    </div>
                </div>
            </section>
            <section className='px'>
                <div className='container'>
                    { isFetching
                        ? <ListingsLoader count={ 20 } />
                        : <>
                            <Listings data={ data } />
                            <ListingsPaginaite pageCount={ 2 } />
                        </>
                    }
                </div>
            </section>
        </MainLayout>
    )
}