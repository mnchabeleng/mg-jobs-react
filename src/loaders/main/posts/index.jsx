import PostLoaderItem from './Item'

export default function PostsLoader({ count }) {
    const posts = []

    for (let i = 0; i < count; i++) {
        posts.push(i)
    }

    return (
        <div className='posts-loader'>
        { posts.map((item) => <PostLoaderItem key={ item } />) }
        </div>
    )
}