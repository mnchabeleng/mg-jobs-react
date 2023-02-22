import PostItemCategory from './Category'

export default function PostItemImage({ data }) {
    const mediumUrl = data?._embedded['wp:featuredmedia'][0]?.media_details?.size?.medium?.source_url
    const thumbnailUrl = data?._embedded['wp:featuredmedia'][0]?.media_details?.size?.thumbnail?.source_url

    const url = thumbnailUrl
                ? thumbnailUrl
                : data?._embedded['wp:featuredmedia'][0]?.source_url
    
    return (
        <a
            href={ data.link }
            target='_blank'
            rel='noopener noreferrer'
            className='post-item-image'>
            <img src={ url } alt={ data.title.rendered } />
            <PostItemCategory data={ data } />
        </a>
    )
}