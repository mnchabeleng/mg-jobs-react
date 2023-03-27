import MainLayout from '../layouts/MainLayout'
import { useQuery } from '@apollo/client'
import GET_LISTINGS from '../graphql/queries/getHomePageListings'
import getMgPosts from '../hooks/queries/getMgPosts'
import heroBgImage from '../assets/img/johannesburg-cbd.jpg'

import Section from '../components/html/Section'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import Anchor from '../components/html/Anchor'

import SearchForm from '../components/SearchForm'
import Listings from '../components/listings'
import Posts from '../components/posts'

const title = 'Mail & Guardian Jobs'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

const heroStyles = {
    backgroundImage: `url(${ heroBgImage })`,
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)'
}

export default function HomePage() {
    const {
        loading: mgListingsLoading,
        error: mgListingsError,
        data: mgListings
    } = useQuery(GET_LISTINGS)

    const {
        data: mgPosts
    } = getMgPosts()

    console.log(mgListings)

    return (
        <MainLayout>
            <Section
                style={ heroStyles }
                className="py-20">
                <Container>
                    <PageTitle className="text-center">
                        { title }
                    </PageTitle>
                    <p className="text-center text-xl mb-6">
                        { description }
                    </p>
                    <SearchForm />
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="flex items-center justify-between">
                        <SectionTitle>Jobs</SectionTitle>
                    </div>
                    <Listings />
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="flex items-center justify-between">
                        <SectionTitle>Tenders</SectionTitle>
                    </div>
                    <Listings />
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="flex items-center justify-between">
                        <SectionTitle>Newsletter</SectionTitle>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="flex items-center justify-between">
                        <SectionTitle>MG Posts</SectionTitle>
                        <Anchor
                            href='http://mg.co.za'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit MG.CO.ZA &rarr;
                        </Anchor>
                    </div>
                    { mgPosts && <Posts data={ mgPosts ?? [] } /> }
                </Container>
            </Section>
        </MainLayout>
    )
}
