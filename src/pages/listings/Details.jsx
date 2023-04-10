import MainLayout from '../../layouts/MainLayout'
import { useState, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { momentsAgo, defaultDate } from '../../helpers/time'
import { fetchMgListing, fetchMgListingMedia } from '../../hooks/queries/getMgListings'
import ShareListing from '../../components/listings/ShareListing'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri'

const {
  VITE_REACT_MG_TENDER_ID
} = import.meta.env

import Section from '../../components/html/Section'

import Button from '../../components/html/form/Button'
import Container from '../../components/Container'
const ListingApplyForm = lazy(() => import('../../components/listings/ListingApplyForm'))

export default function ListingDetails() {
  const { listingSlug } = useParams()
  
  const [apply, setApply] = useState(false)

  const {
    data: mgListsingData,
    isLoading
  } = fetchMgListing(listingSlug)

  if(isLoading)
  return(
    <MainLayout>
      <Section>
        <Container>Loading...</Container>
      </Section>
    </MainLayout>
  )
  
  const listing = mgListsingData.data[0]

  const title = listing?.title.rendered
  const excerpt = listing?.excerpt.rendered
  const content = listing?.content.rendered
  const date = listing?.modified

  const companyName = listing?._embedded['wp:term'][0][0]?.name
  const region = listing?._embedded['wp:term'][1][0]?.name
  const sectors = listing?._embedded['wp:term'][2]
  const type = listing?._embedded['wp:term'][3][0]?.name

  const closingDate = listing?.acf?.closing_date
  const salary = listing?.acf?.salary

  return (
    <>
      <MainLayout
        title={ title }
        description={ excerpt }>
        
        <Section>
          <Container>
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

              {
                salary
                && <div>
                    <b>Salary:</b> { salary }
                  </div>
              }

            </div>

            <ShareListing />

            <div
              className="mb-6"
              dangerouslySetInnerHTML={{ __html: content }} />
            
            {
              (100 === VITE_REACT_MG_TENDER_ID)
              && <Button
                  onClick={ () => setApply(prev => !prev) }
                  className="flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-700 text-gray-100 mb-4">
                  Apply
                  { apply ? <RiSubtractFill /> : <RiAddFill /> }
                </Button>
            }

            {
              apply
              && <Suspense fallback="Loading...">
                <ListingApplyForm />
              </Suspense>
            }
          </Container>
        </Section>
      </MainLayout>
    </>
  )
}
