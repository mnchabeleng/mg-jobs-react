import moment from 'moment'

export default function ListingItemFooter({ data }) {
    const date = moment(data.modified).format('D MMMM YYYY')
    const listingProvince = data?._embedded['wp:term'][2][0]?.acf?.province
    const listingLocation = data?._embedded['wp:term'][2][0]?.name

    return (
        <div className='listing-item-footer'>
            {
                (listingProvince && listingLocation)
                && <div className='listing-item-location'>{ listingProvince + ', ' + listingLocation }</div>
            }

            <div className='listing-item-date'>{ date }</div>
        </div>
    )
}