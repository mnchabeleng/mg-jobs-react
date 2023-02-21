import { Link } from 'react-router-dom'

import ListingItemHeader from './Header'
import ListingItemBody from './Body'
import ListingItemFooter from './Footer'

export default function ListingItem({ data }) {
    const slug = data.slug !== undefined ? data.slug : 'slug-not-found'

    return (
        <Link
            to={ `/listings/${ slug }` }
            className='listing-item'>
                <ListingItemHeader data={ data } />
                <ListingItemBody data={ data } />
                <ListingItemFooter data={ data } />
        </Link>
    )
}