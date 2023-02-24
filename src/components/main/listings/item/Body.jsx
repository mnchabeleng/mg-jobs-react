export default function ListingItemBody({ data }) {
    const title = data.title.rendered.length > 45 ? data.title.rendered.substring(0, 45) + '...' : data.title.rendered
    const listingType = data?._embedded['wp:term'][0][0]?.name

    return (
        <div className='listing-item-body'>
            <h4
                className='listing-item-title'
                dangerouslySetInnerHTML={{ __html: title }} />
            {
                listingType
                && <span className='listing-item-type'>{ listingType }</span>
            }
        </div>
    )
}