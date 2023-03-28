import ListingItem from "./ListingItem"
import NoListings from "./NoListings"

export default function Listings({ data }) {
  return (
    <>
    {
      (data && data.length > 0)
      ? <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
        { data.map((item, index) => <ListingItem key={ index } data={ item } />) }
      </div>
      : <NoListings />
    }
    </>
  )
}
