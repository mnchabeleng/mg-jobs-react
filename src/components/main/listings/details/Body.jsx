export default function ListingDetailsBody({ data }) {
    const content = data.content.rendered
    const file = data?.acf?.file
    const fileSize = data?.acf?.filesize

    return (
        <div className='listing-details-body'>
            <div
                className='listing-content'
                dangerouslySetInnerHTML={{ __html: content }} />
            
            { file && (
                <div className='listing-attachment'>
                    <h4 className='title'>Download Attachment</h4>
                    <a
                        href={ file.url }
                        target='_blank'
                        rel='noopener noreferrer'
                        className='listing-details-file'>
                        <img src={ file.icon } alt={ file.filename } width={ 25 } height={ 30 } />
                        <p>{ file.filename.length > 45 ? file.filename.substring(0, 45) + '...' : file.filename }</p>
                    </a>
                </div>
            )}
        </div>
    )
}