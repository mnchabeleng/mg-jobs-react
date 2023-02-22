import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function CategorySelect({ data, isFetching, category, setCategory }) {
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const listingsCategory = searchParams.get('category') ? searchParams.get('category') : ''
        setCategory(listingsCategory)
    }, [])

    return (
        <select
            onChange={ (e) => setCategory(e.target.value) }
            value={ category }
            name='category'>
        {
            isFetching
            ? <option value=''>Loading...</option>
            : <>
                <option value=''>~ Select Category ~</option>
                {
                    data.map((item, index) => <option key={ index } value={ item.id }>{ item.name }</option>)
                }
            </>
        }
        </select>
    )
}