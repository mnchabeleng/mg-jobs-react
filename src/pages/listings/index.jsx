import MainLayout from '../../layouts/MainLayout'
import { fetchMgListings } from '../../hooks/queries/getMgListings'
import MGListings from '../../components/listings'
import ListingsPaginaition from '../../components/listings/Pagination'

import Hero from '../../components/Hero'
import ListingsLoader from '../../loaders/listings'
import Section from '../../components/html/Section'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'

const title = 'Jobs & Tenders'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

export default function Listings() {
  const urlQueries = {}

  const {
    data: mgListings
  } = fetchMgListings(urlQueries)

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
                  className={ mgListings.wpTotalPages > 1 ? "mb-6" : "" }
                  data={ mgListings.data } />

                <ListingsPaginaition pageCount={ mgListings.wpTotalPages } />
              </>
            : <ListingsLoader count={ 24 } />
          }
        </Container>
      </Section>
    </MainLayout>
  )
}
