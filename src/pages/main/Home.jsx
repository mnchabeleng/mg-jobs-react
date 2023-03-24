import MainLayout from '../../layouts/MainLayout'
import PageLoader from '../../loaders/main/PageLoader'
import heroBgImage from '../../assets/img/johannesburg-cbd.jpg'

import axios from 'axios'
import { useQuery } from 'react-query'
import { useQueryOptions } from '../../config'
import { Link } from 'react-router-dom'

import Search from '../../components/main/listings/search'
import Listings from '../../components/main/listings'
import Posts from '../../components/main/posts'

import ListingsLoader from '../../loaders/main/listings'
import PostsLoader from '../../loaders/main/posts'

const {
    VITE_REACT_MG_JOBS_WP_API: jobsApiUrl,
    VITE_REACT_MG_WP_API: mgApiUrl,
    VITE_REACT_MG_JOBS_ID: jobsId,
    VITE_REACT_MG_TENDERS_ID: tendersId
} = import.meta.env

async function fetchData({ queryKey }) {
    const url = queryKey[1]
    return axios.get(url)
            .then(response => response.data)
            .catch(error => error)
}

const title = 'Mail & Guardian Jobs'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

export default function HomePage() {
    const jobsUrl = `${ jobsApiUrl }/mg_jobs?_embed&mg_job_types=${ jobsId }&per_page=8`
    const {
        data: jobsData,
        error: jobsError,
        isError: jobsIsError,
        isLoading: jobsIsLoading,
        isFetching: jobsIsFetching
    } = useQuery(['jobs-api-data', jobsUrl], fetchData, useQueryOptions)

    //const tendersUrl = `${ jobsApiUrl }/mg_jobs?_embed&mg_job_types=${ tendersId }&per_page=4`
    const tendersUrl = `https://staging-jobsmgco-staging.kinsta.cloud/wp-json/wp/v2/job-listings?job_type=${ jobsId }&_embed&per_page=1`
    const {
        data: tendersData,
        error: tendersError,
        isError: tendersIsError,
        isLoading: tendersIsLoading,
        isFetching: tendersIsFetching
    } = useQuery(['tenders-api-data', tendersUrl], fetchData, useQueryOptions)

    const postsUrl = `${ mgApiUrl }/posts?_embed&per_page=4`
    const {
        data: postsData,
        error: postsError,
        isError: postsIsError,
        isLoading: postsIsLoading,
        isFetching: postsIsFetching
    } = useQuery(['posts-api-data', postsUrl], fetchData, useQueryOptions)

    if(jobsIsError || tendersIsError || postsIsError) {
        return (
            <ul>
                { jobsIsError && <li>{ jobsError.message }</li> }
                { tendersIsError && <li>{ tendersError.message }</li> }
                { postsIsError && <li>{ postsError.message }</li> }
            </ul>
        )
    }

    if(jobsIsLoading || tendersIsLoading || postsIsLoading) {
        return <PageLoader>Loading...</PageLoader>
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
                    <div className='section-header'>
                        <h2 className='section-title'>Jobs</h2>
                        <Link to={ `/listings?type=${ jobsId }` }>View more jobs &rarr;</Link>
                    </div>
                    {/* { jobsIsFetching
                        ? <ListingsLoader count={ 8 } />
                        : <>
                            <Listings data={ jobsData } /> 
                        </>
                    } */}
                </div>
            </section>
            <section className='px'>
                <div className='container'>
                    <div className='section-header'>
                        <h2 className='section-title'>Tenders</h2>
                        <Link to={ `/listings?type=${ tendersId }` }>View more tenders &rarr;</Link>
                    </div>
                    {/* { tendersIsFetching
                        ? <ListingsLoader count={ 4 } />
                        : <>
                            <Listings data={ tendersData } />
                        </>
                    } */}
                </div>
            </section>
            <section className='px'>
                <div className='container'>
                    <div className='section-header'>
                        <h2 className='section-title'>M&G Posts</h2>
                        <a
                            href='http://mg.co.za'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit MG.CO.ZA &rarr;
                        </a>
                    </div>
                    { postsIsFetching ? <PostsLoader count={ 4 } /> : <Posts data={ postsData } /> }
                </div>
            </section>
        </MainLayout>
    )
}