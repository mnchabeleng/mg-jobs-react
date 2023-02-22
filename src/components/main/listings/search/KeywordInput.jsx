import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function keywordInput({ keyword, setKeyword }) {
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const listingsKeyword = searchParams.get('keywords') ? searchParams.get('keywords') : ''
        setKeyword(listingsKeyword)
    }, [])

    return (
        <input
            onChange={ (e) => setKeyword(e.target.value) }
            value={ keyword }
            name='keyword'
            type='text'
            placeholder='Search by keyword' /> 
    )
}