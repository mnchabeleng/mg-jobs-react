import defaultImage from '../../../../assets/img/default-profile-icon.jpg'
import moment from 'moment'

import {
    RiMapPin2Line,
    RiFacebookFill,
    RiLinkedinFill,
    RiWhatsappLine,
    RiTwitterFill
} from 'react-icons/ri'

export default function ListingDetailsHeader({ data, isFetching }) {
    const listingTitle = data.title.rendered
    const listingProvince = data?._embedded['wp:term'][2][0]?.acf?.province
    const listingLocation = data?._embedded['wp:term'][2][0]?.name
    const listingAuthorName = data?._embedded['wp:term'][3][0].name
    const listingAuthorImage = data?._embedded['wp:term'][3][0]?.acf?.image?.url
    const ListingCategory = data?._embedded['wp:term'][1][0]?.name
    const listingDate = moment(data.modified).format('D MMMM YYYY')

    return (
        <div className='listing-details-header'>
            {
                isFetching
                ? <h1 className='page-title'>
                    <div className='title-loader-w100'></div>
                    <div className='title-loader-w80'></div>
                </h1>
                : <h1
                    className='page-title'
                    dangerouslySetInnerHTML={{ __html: listingTitle }} />
            }
            
            {
                isFetching
                ? <div className='listing-details-meta'><div className='loader-text-w60'></div></div>
                : <ul className='listing-details-meta'>
                    {
                        listingLocation 
                        && <li><RiMapPin2Line /> { `${ listingProvince }, ` }{ listingLocation }</li>
                    }
                    &bull;
                    { ListingCategory && <li>{ ListingCategory }</li> }
                    &bull;
                    { listingDate && <li>{ listingDate }</li> }
                </ul>
            }

            <div className='share-listing'>
                <div className='share-listing-title'>Share</div>

                <ul className='share-listing-icons'>
                    <li>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href="#!"
                            className='facebook'><RiFacebookFill /></a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href="#!"
                            className='twitter'><RiTwitterFill /></a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href="#!"
                            className='whatsapp'><RiWhatsappLine /></a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href="#!"
                            className='linkedin'><RiLinkedinFill /></a>
                    </li>
                </ul>
            </div>

            <div className='listing-details-author'>
                <div>
                    <img
                        src={ listingAuthorImage ? listingAuthorImage : defaultImage }
                        alt={ listingAuthorName }
                        className='listing-details-author-image' />
                </div>
                <div>
                    <h4>{ listingAuthorName }</h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}