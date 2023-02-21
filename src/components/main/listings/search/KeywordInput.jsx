import { useEffect } from 'react'

export default function keywordInput({ keyword, setKeyword }) {
    useEffect(() => {

    }, [keyword])
    return (
        <input
            onChange={ (e) => setKeyword(e.target.value) }
            value={ keyword }
            name='keyword'
            type='text'
            placeholder='Search by keyword' /> 
    )
}