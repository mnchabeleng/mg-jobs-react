export default async function fetchData({ queryKey }) {
    const url = queryKey[1]
    return await fetch(url).then(async res => {
        const wpTotalPosts = res?.headers?.get('X-WP-Total')
        const wpTotalPages = res?.headers?.get('X-WP-TotalPages')

        return {
            wpTotalPosts,
            wpTotalPages,
            data: await res.json()
        }
    })
}