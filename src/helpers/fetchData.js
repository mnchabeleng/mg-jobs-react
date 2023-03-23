export default async function fetchData({ queryKey }) {
    const url = queryKey[1]
    return await fetch(url).then(res => res.json())
}