import { useQuery } from 'react-query'

async function fetchData({ queryKey }) {
    const url = queryKey[1]
    //return 'hello world'
    return fetch(url).then(res => res.json())
}

const getMgPosts = () => {
    const postsUrl = `https://mg.co.za/wp-json/wp/v2/posts?_embed&per_page=4`
    return useQuery(['mg-posts-api-data', postsUrl], fetchData)
}

export default getMgPosts