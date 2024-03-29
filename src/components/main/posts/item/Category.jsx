export default function PostItemCategory({ data }) {
    const category = data._embedded['wp:term'][0][0].name
    return (
        <small className='post-item-category'>{ category }</small>
    )
}