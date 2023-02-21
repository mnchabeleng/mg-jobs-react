export default function ListingTypeCheckboxes({ data, isFetching, listingType, setListingType }) {
    function handleCheckboxChange(e) {
        const {checked, value} = e.target

        if(checked) {
            setListingType(prev => [...prev, value])
        } else {
            setListingType(prev => [...prev.filter( i => i !== value )])
        }
    }

    return (
        <>
            {
                isFetching
                ? 'Loading...'
                : data.map((item, index) => <label key={ index }>
                    <input
                        onChange={ (e) => handleCheckboxChange(e) }
                        value={ item.id } 
                        name='listingType'
                        type='checkbox' />
                    &nbsp;
                    { item.name }
                </label>)
            }
        </>
    )
}