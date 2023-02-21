import PostItemCategory from './Category'

export default function PostItemImage({ data }) {
    const url = data._embedded['wp:featuredmedia'][0].source_url
    
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