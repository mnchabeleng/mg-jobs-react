import MainLayout from '../../layouts/MainLayout'
import { useSearchParams } from 'react-router-dom'
import { fetchMgListings } from '../../hooks/queries/getMgListings'
import MGListings from '../../components/listings'

import Hero from '../../components/Hero'
import ListingsLoader from '../../loaders/listings'
import Section from '../../components/html/Section'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import Pagination from '../../components/Pagination'

const title = 'Jobs & Tenders'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

const listingsPerPage = 24 // number of listings per page

export default function Listings() {
  const [searchParams] = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const keyword = searchParams.get('keyword') ?? ''
  const sector = searchParams.get('sector') ?? ''
  const region = searchParams.get('region') ?? ''
  const type = searchParams.get('type') ?? ''

  console.log(page)
   
  const urlQueries = {
    page,
    keyword,
    sector,
    region,
    type
  }

  const {
    data: mgListings
  } = fetchMgListings(listingsPerPage, urlQueries)

  return (
    <MainLayout
      title={ title }
      description={ description }>

      <Hero
        title={ title }
        description={ description } />
      
      <Section>
        <Container>
          <SectionTitle>
            Latest Listings
          </SectionTitle>

          {
            mgListings
            ? <>
                <MGListings
                  className={ (mgListings.wpTotalPages > 1) ? "mb-6" : "" }
                  data={ mgListings.data } />

                {
                  (mgListings.wpTotalPages > 1)
                  &&  <Pagination
                        currentPage={ page }
                        total={ mgListings.wpTotalPosts }
                        limit={ listingsPerPage } />
                }
              </>
            : <ListingsLoader count={ listingsPerPage } />
          }
        </Container>
      </Section>
    </MainLayout>
  )
}
