export default function PostItemTitle({ data }) {
    const title = data.title.rendered.length > 40 ? data.title.rendered.substring(0, 40) + '...' : data.title.rendered

    return (
        <h4 className='postitemTitle'>
            <a
                href={ data.link }
                target='_blank'
                rel='noopener noreferrer'
                dangerouslySetInnerHTML={{ __html: title }} />
        </h4>
    )
}