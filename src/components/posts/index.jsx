import PostItem from "./PostItem"

export default function Posts({ data }) {
  console.log(data)

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {
        data.map((item, index) => <PostItem key={ index } data={ item } />)
      }
    </div>
  )
}