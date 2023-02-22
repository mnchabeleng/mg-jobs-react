import { useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ListingTypeCheckboxes({ data, isFetching, listingType, setListingType }) {
    const [searchParams] = useSearchParams()
    const checkboxRefs = useRef([])
    checkboxRefs.current = []

    function handleCheckboxChange(e) {
        const {checked, value} = e.target

        if(checked) {
            setListingType(prev => [...prev, value])
        } else {
            setListingType(prev => [...prev.filter( i => i !== value )])
        }
    }

    function addToRefs(e) {
        if(e && !checkboxRefs.current.includes(e)) {
            checkboxRefs.current.push(e)
        }
    }

    useEffect(() => {
        const param = searchParams.get('type') ? searchParams.get('type') : ''
        const paramArray = param.split(',')
    }, [])

    return (
        <>
            {
                isFetching
                ? 'Loading...'
                : data.map((item, index) => (
                    <label key={ index }>
                        <input
                            onChange={ (e) => handleCheckboxChange(e) }
                            value={ item.id }
                            ref={ (e) => addToRefs(e) }
                            name='listingType'
                            type='checkbox' />
                        &nbsp;
                        { item.name }
                    </label>)
                )
            }
        </>
    )
}