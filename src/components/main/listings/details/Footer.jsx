import { Link, useNavigate } from 'react-router-dom'

const {
    VITE_REACT_MG_JOBS_ID: jobsId
} = import.meta.env

export default function ListingDetailsFooter({ data }) {
    const navigate = useNavigate()
    const isJob = jobsId.split(',').includes((String(data.mg_job_types[0])))
    const applyEmail = data?._embedded['wp:term'][3][0]?.acf?.public_email

    return (
        <div className='listing-details-footer'>
            {
                (isJob && applyEmail)
                && <button
                        onClick={ () => navigate(`/listings/${ data.slug }/apply`) }
                        className='btn black'>Apply &rarr;</button>
            }
        </div>
    )
}