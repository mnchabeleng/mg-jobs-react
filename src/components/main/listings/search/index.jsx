import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useQueryOptions } from '../../../../config'
import { RiSearchLine } from 'react-icons/ri'

import KeywordInput from './KeywordInput'
import CategorySelect from './CategorySelect'
import LocationSelect from './LocationSelect'
import ListingTypeCheckboxes from './ListingTypeCheckboxes'

const {
    VITE_REACT_MG_JOBS_WP_API: jobsApiUrl
} = import.meta.env

async function fetchData({ queryKey }) {
    const url = queryKey[1]
    return axios.get(url)
            .then(response => response.data)
            .catch(error => error)
}

export default function ListingsSearch() {
    const navigate = useNavigate()

    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [listingType, setListingType] = useState('')

    function handleFormSubmit(e) {
        e.preventDefault()
        navigate(`/listings?keyword=${keyword}&category=${category}&location=${location}&type=${listingType}`)
    }

    const categoriesUrl = `${ jobsApiUrl }/mg_job_categories?per_page=100`
    const {
        data: categoriesData,
        error: categoriesError,
        isError: categoriesIsError,
        isLoading: categoriesIsLoading,
        isFetching: categoriesIsFetching
    } = useQuery(['categories-api-data', categoriesUrl], fetchData, useQueryOptions)

    const locationsUrl = `${ jobsApiUrl }/mg_job_locations`
    const {
        data: locationsData,
        error: locationsError,
        isError: locationsIsError,
        isLoading: locationsIsLoading,
        isFetching: locationsIsFetching
    } = useQuery(['locations-api-data', locationsUrl], fetchData, useQueryOptions)

    const listingTypesUrl = `${ jobsApiUrl }/mg_job_types`
    const {
        data: listingTypesData,
        error: listingTypesError,
        isError: listingTypesIsError,
        isLoading: listingTypesIsLoading,
        isFetching: listingTypesIsFetching
    } = useQuery(['listing-types-api-data', listingTypesUrl], fetchData, useQueryOptions)

    if(categoriesIsError || locationsIsError || listingTypesIsError) {
        return (
            <ul>
                { categoriesError && <li>{ categoriesError.message }</li> }
                { locationsError && <li>{ locationsError.message }</li> }
                { listingTypesError && <li>{ listingTypesError.message }</li> }
            </ul>
        )
    }

    if(categoriesIsLoading || locationsIsLoading || listingTypesIsLoading) {
        return <div className='search-form-loader'>Loading...</div>
    }

    return (
        <form
            action='/listings'
            onSubmit={ (e) => handleFormSubmit(e) }
            className='search-form'>

            <div className='row-1'>
                <KeywordInput
                    keyword={ keyword }
                    setKeyword={ setKeyword } />

                <CategorySelect
                    category={ category }
                    setCategory={ setCategory }
                    data={ categoriesData }
                    isFetching={ categoriesIsFetching } />
                
                <LocationSelect
                    location={ location }
                    setLocation={ setLocation }
                    data={ locationsData }
                    isFetching={ locationsIsFetching } />
            </div>

            <div className='row-2'>
                <ListingTypeCheckboxes
                    data={ listingTypesData }
                    isFetching={ listingTypesIsFetching }
                    listingType={ listingType }
                    setListingType={ setListingType } />
            </div>

            <button className='red'>
                <RiSearchLine />
                &nbsp;
                Search
            </button>
        </form>
    )
}