import { useQuery } from 'react-query'
import fetchData from '../../helpers/fetchData'

const {
    VITE_REACT_MG_WP_API
} = import.meta.env

export default function fetchMgPosts(perPage) {
    const postsUrl = `${ VITE_REACT_MG_WP_API }/posts?_embed&per_page=${ perPage }&tags=138714`
    return useQuery(['mg-posts-api-data', postsUrl], fetchData, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false
    })
}