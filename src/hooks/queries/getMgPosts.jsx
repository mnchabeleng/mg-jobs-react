import { useQuery } from 'react-query'
import fetchData from '../../helpers/fetchData'

export default function getMgPosts() {
    const postsUrl = `https://mg.co.za/wp-json/wp/v2/posts?_embed&per_page=4`
    return useQuery(['mg-posts-api-data', postsUrl], fetchData, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false
    })
}