import MainLayout from '../../layouts/MainLayout'
import { fetchMgListings } from '../../hooks/queries/getMgListings'
import heroBgImage from '../../assets/img/johannesburg-cbd.jpg'

import MGListings from '../../components/listings'
import ListingsLoader from '../../loaders/listings'
import Section from '../../components/html/Section'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'

import SearchForm from '../../components/SearchForm'

const title = 'Jobs & Tenders'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

const heroStyles = {
  backgroundImage: `url(${ heroBgImage })`,
  boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)'
}

export default function Listings() {
  const {
    data: mgListings
  } = fetchMgListings()

  return (
    <MainLayout title={ title } description={ description }>
      <Section
        style={ heroStyles }
        className="py-20">
        <Container>
          <PageTitle className="text-center text-gray-100">
            { title }
          </PageTitle>
          <p className="text-center text-xl mb-6 text-gray-100">
            { description }
          </p>
          <SearchForm />
        </Container>
      </Section>
      <Section>
        <Container>
          {
            mgListings
            ? <MGListings data={ mgListings } />
            : <ListingsLoader count={ 16 } />
          }
        </Container>
      </Section>
    </MainLayout>
  )
}
