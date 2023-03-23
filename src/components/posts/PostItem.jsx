export default function PostItem({ data }) {
    const title = data?.title.rendered
    return (
        <div>{ title }</div>
    )
}
