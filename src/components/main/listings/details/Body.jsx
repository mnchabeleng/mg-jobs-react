import { Link } from 'react-router-dom'

const {
    VITE_REACT_MG_JOBS_ID: jobsId
} = import.meta.env

export default function ListingDetailsBody({ data }) {
    const content = data.content.rendered
    const file = data?.acf?.file
    const isJob = jobsId.split(',').includes((String(data.mg_job_types[0])))

    return (
        <div className='listing-details-body'>
            <div
                dangerouslySetInnerHTML={{ __html: content }} />
            
            { isJob && <Link to={ `/listings/${ data.slug }/apply` } className='btn'>Apply</Link> }

            { file && (
                <a
                    href={ file.url }
                    target='_blank'
                    rel='noopener noreferrer'
                    className='listing-details-file'>
                    <img src={ file.icon } alt={ file.filename } width={ 25 } height={ 30 } />
                    <p>{ file.filename.length > 45 ? file.filename.substring(0, 45) + '...' : file.filename }</p>
                </a>
            )}
        </div>
    )
}