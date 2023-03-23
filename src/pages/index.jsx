import MainLayout from '../layouts/MainLayout'
import { useQuery } from '@apollo/client'
import GET_LISTINGS from '../graphql/queries/getHomePageListings'
import getMgPosts from '../hooks/queries/getMgPosts'

import Section from '../components/html/Section'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

import SearchForm from '../components/SearchForm'
import Listings from '../components/listings'
import Posts from '../components/posts'

const title = 'Mail & Guardian Jobs'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

export default function HomePage() {
    const { loading, error, data: mgListings } = useQuery(GET_LISTINGS)
    //const { data: mgPosts } = getMgPosts()

    mgListings && console.log(mgListings)
    //mgPosts && console.log(mgPosts)

    return (
        <MainLayout>
            <Section className="py-20 bg-black">
                <Container>
                    <PageTitle className="text-center">
                        { title }
                    </PageTitle>
                    <p className="text-center mb-6">
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
                        <SectionTitle>MG Posts</SectionTitle>
                    </div>
                </Container>
            </Section>
        </MainLayout>
    )
}
