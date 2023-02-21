import ListingItem from './item'

export default function Listings({ data }) {
    return (
        <div className='listings'>
            { data.map((item, index) => <ListingItem key={ index } data={ item } />) }
        </div>
    )
}

Listings.defaultProps = {
    data: []
}