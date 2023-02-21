import defaultImage from '../../../../assets/img/default-profile-icon.jpg'

export default function ListingItemHeader({ data }) {
    const listingCompanyName = data?._embedded['wp:term'][3][0]?.name
    const listingAuthorImage = data?._embedded['wp:term'][3][0]?.acf?.image?.url
    const ListingCategory = data?._embedded['wp:term'][1][0]?.name
    const listingLocation = ''

    return (
        <div className='listing-item-header'>
            <div className='listing-item-author'>
                <img
                    src={ listingAuthorImage ? listingAuthorImage : defaultImage }
                    alt='default profile image'
                    className='listing-item-author-image' />
                
                <div>
                    <h5 className='listing-item-author-name'>{ listingCompanyName }</h5>
                    <div className='listing-item-category'>{ ListingCategory }</div>
                </div>   
            </div>
        </div>
    )
}