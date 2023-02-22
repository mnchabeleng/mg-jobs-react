import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function LocationSelect({ data, isFetching, location, setLocation }) {
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const listingsLocation = searchParams.get('location') ? searchParams.get('location') : ''
        setLocation(listingsLocation)
    }, [])

    return (
        <select
            onChange={ (e) => setLocation(e.target.value) }
            value={ location }
            name='location'>
        {
            isFetching
            ? <option value=''>Loading...</option>
            : <>
                <option value=''>~ Select Location ~</option>
                {
                    data.map((item, index) => <option key={ index } value={ item.id }>{ item.name }</option>)
                }
            </>
        }
        </select>
    )
}