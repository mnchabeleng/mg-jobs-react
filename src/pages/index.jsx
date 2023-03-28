import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { fetchMgJobs, fetchMgTenders } from '../hooks/queries/getMgListings'
import fetchMgPosts from '../hooks/queries/getMgPosts'
import heroBgImage from '../assets/img/johannesburg-cbd.jpg'

import Section from '../components/html/Section'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import Anchor from '../components/html/Anchor'

import SearchForm from '../components/SearchForm'
import Listings from '../components/listings'
import ListingsLoader from '../loaders/listings'
import Posts from '../components/posts'
import NewsLetterForm from '../components/NewsLetterForm'

const title = 'Mail & Guardian Jobs'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

const heroStyles = {
    backgroundImage: `url(${ heroBgImage })`,
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.7)'
}

export default function HomePage() {
    const {
        data: mgJobs
    } = fetchMgJobs()

    const {
        data: mgTenders
    } = fetchMgTenders()

    const {
        data: mgPosts
    } = fetchMgPosts()

    return (
        <MainLayout>
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
                    <div className="flex items-center justify-between mb-6">
                        <SectionTitle>Jobs</SectionTitle>
                        <Link
                            className="font-bold"
                            to={ `/listings` }>View more jobs &rarr;</Link>
                    </div>
                    {
                        mgJobs
                        ? <Listings title="Jobs" data={ mgJobs } />
                        : <ListingsLoader count={ 8 } />
                    }
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <SectionTitle>Tenders</SectionTitle>
                        <Link
                            className="font-bold"
                            to={ `/listings` }>View more tenders &rarr;</Link>
                    </div>
                    {
                        mgTenders
                        ? <Listings title="Tenders" data={ mgTenders } />
                        : <ListingsLoader count={ 4 } />
                    }
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="py-8 px-4 flex justify-center items-center bg-red-700 rounded-md">
                        <div className="text-gray-100 text-center">
                            <h3 className="font-bold text-2xl lg:text-3xl">Neswletter</h3>
                            <p className="text-lg mb-6">Subscribe to our newsletter and get notified by email as soon as new jobs/tenders are posted.</p>
                            <NewsLetterForm />
                        </div>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <SectionTitle>M&G Latest Posts</SectionTitle>
                        <Anchor
                            className="font-bold"
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
