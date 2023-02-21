import moment from 'moment'

export default function ListingItemFooter({ data }) {
    const date = moment(data.modified).format('D MMMM YYYY')

    return (
        <div className='listing-item-footer'>
            <div className='listing-item-date'>{ date }</div>
        </div>
    )
}