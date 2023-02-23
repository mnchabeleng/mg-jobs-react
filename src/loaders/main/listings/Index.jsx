import ListingsLoaderItem from './Item'

export default function ListingsLoader({ count }) {
    const listings = []

    for (let i = 0; i < count; i++) {
        listings.push(i)
    }

    return (
        <div className='listings-loader'>
        { listings.map((item) => <ListingsLoaderItem key={ item } />) }
        </div>
    )
}