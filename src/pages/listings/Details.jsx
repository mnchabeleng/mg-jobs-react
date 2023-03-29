import SidebarLayout from '../../layouts/SidebarLayout'
import { useState, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { momentsAgo, defaultDate } from '../../helpers/time'
import { fetchMgListing } from '../../hooks/queries/getMgListings'
import ShareListing from '../../components/listings/ShareListing'

import Section from '../../components/html/Section'

const ListingApplyModal = lazy(() => import('../../components/listings/ListingApplyModal'))

export default function ListingDetails() {
  let [isOpen, setIsOpen] = useState(false)
  const { listingSlug } = useParams()

  const { data: mgListsingData, isLoading } = fetchMgListing(listingSlug)

  if(isLoading) return <SidebarLayout>
    <Section>Loading...</Section>
  </SidebarLayout>

  const mgListsing = mgListsingData.data

  const title = mgListsing[0]?.title?.rendered
  const excerpt = mgListsing[0]?.excerpt?.rendered
  const content = mgListsing[0]?.content?.rendered

  const companyName = mgListsing[0]?._embedded['wp:term'][2][0]?.name
  const region = mgListsing[0]?._embedded['wp:term'][1][0]?.name
  const sectors = mgListsing[0]?._embedded['wp:term'][3]
  const date = mgListsing[0]?.date
  const closingDate = mgListsing[0]?.acf?.closing_date
  const type = mgListsing[0]?._embedded['wp:term'][0][0]?.name

  return (
    <>
      {
        isOpen
        &&  <Suspense fallback="Loading...">
              <ListingApplyModal isOpen={ isOpen } setIsOpen={ setIsOpen } />
            </Suspense>
      }

      <SidebarLayout
        title={ title }
        description={ excerpt }>
        <Section>
          <h1
            className="text-xl md:text-2xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: title }} />
          
          <div className="mb-4">
            <div>
              <b>Company:</b> { companyName }
            </div>

            <div>
              <b>Region:</b> { region }
            </div>

            <div>
              <b>Sectors:</b>&nbsp;
              { sectors.map((item, index) => (<div key={ index } className="inline-block">{ (index > 0) && ', ' }{ item.name }</div> )) }
            </div>

            <div>
              <b>Type:</b> { type }
            </div>

            <div>
              <b>Posted:</b> { momentsAgo(date) }
            </div>

            {
              closingDate
              && <div><b>Closing:</b> <span className="text-red-600">{ defaultDate(closingDate) }</span></div>
            }
          </div>

          <ShareListing />

          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: content }} />

          <div className="mb-6">
            file attachment here
          </div>
          
          <ShareListing />
        </Section>
      </SidebarLayout>
    </>
  )
}
