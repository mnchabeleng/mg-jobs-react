import PostItemImage from './Image'
import PostItemTitle from './Title'
import PostItemMeta from './Meta'
import PostItemExcerpt from './Excerpt'

export default function PostItem({ data }) {
    return (
        <div className='post-item'>
            <PostItemImage data={ data } />
            <PostItemTitle data={ data } />
            <PostItemMeta data={ data } />
            <PostItemExcerpt data={ data } />
        </div>
    )
}