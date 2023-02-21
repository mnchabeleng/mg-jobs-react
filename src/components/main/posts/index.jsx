import PostItem from './item'

export default function Posts({ data }) {
    return (
        <div className='posts'>
            { data.map((item, index) => <PostItem key={ index } data={ item } />) }
        </div>
    )
}

Posts.defaultProps = {
    data: []
}