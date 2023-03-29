import Section from './html/Section'
import Container from './Container'
import PageTitle from './PageTitle'
import SearchForm from './SearchForm'
import heroBgImage from '../assets/img/johannesburg-cbd.jpg'

const heroStyles = {
    backgroundImage: `url(${ heroBgImage })`,
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

export default function Hero({ title, description }) {
  return (
    <Section
        style={ heroStyles }
        className="py-20">
        <Container>
            <PageTitle className="text-center text-gray-100">
                { title && title }
            </PageTitle>
            <p className="text-center text-xl mb-6 text-gray-100">
                { description && description }
            </p>
            <SearchForm />
        </Container>
    </Section>
  )
}
