import ListingItem from "./ListingItem"

export default function Listings() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
    </div>
  )
}
