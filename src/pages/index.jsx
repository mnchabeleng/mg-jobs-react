import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { fetchMgJobs, fetchMgTenders } from '../hooks/queries/getMgListings'
import fetchMgPosts from '../hooks/queries/getMgPosts'

import Hero from '../components/Hero'
import Section from '../components/html/Section'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Anchor from '../components/html/Anchor'

import Listings from '../components/listings'
import ListingsLoader from '../loaders/listings'
import Posts from '../components/posts'
import NewsLetterForm from '../components/NewsLetterForm'
import Button from '../components/html/form/Button'

const {
    VITE_REACT_MG_JOB_ID,
    VITE_REACT_MG_TENDER_ID
} = import.meta.env

const title = 'Mail & Guardian Jobs and Tenders'
const description = 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'

export default function HomePage() {
    const {
        data: mgJobs
    } = fetchMgJobs(8)

    const {
        data: mgTenders
    } = fetchMgTenders(4)

    const {
        data: mgPosts
    } = fetchMgPosts(8)

    return (
        <MainLayout
            title={ title }
            description={ description } >

            <Hero
                title={ title }
                description={ description } />

            <Section>
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <SectionTitle>
                            Jobs
                        </SectionTitle>

                        <Link
                            className="font-bold"
                            to={ `/listings?type=${ VITE_REACT_MG_JOB_ID }` }>View more jobs &rarr;</Link>
                    </div>

                    {
                        mgJobs
                        ? <Listings title="Jobs" data={ mgJobs.data } />
                        : <ListingsLoader count={ 8 } />
                    }
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <SectionTitle>
                            Tenders
                        </SectionTitle>

                        <Link
                            className="font-bold"
                            to={ `/listings?type=${ VITE_REACT_MG_TENDER_ID }` }>View more tenders &rarr;</Link>
                    </div>

                    {
                        mgTenders
                        ? <Listings title="Tenders" data={ mgTenders.data } />
                        : <ListingsLoader count={ 4 } />
                    }
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="py-8 px-4 flex justify-center items-center bg-red-700 rounded-md">
                        <div className="text-gray-100 text-center">
                            <h3 className="font-bold text-2xl lg:text-3xl">
                                Neswletter
                            </h3>

                            <p className="text-lg mb-6">
                                Subscribe to our newsletter and get notified by email as soon as new jobs/tenders are posted.
                            </p>

                            <NewsLetterForm />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="flex items-center justify-between mb-6">
                        <SectionTitle>
                            M<span className="text-red-600">&</span>G Latest Posts
                        </SectionTitle>

                        <Anchor
                            className="font-bold"
                            href='http://mg.co.za'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit MG.CO.ZA &rarr;
                        </Anchor>
                    </div>

                    {
                        mgPosts
                        && <Posts data={ mgPosts.data ?? [] } />
                    }
                </Container>
            </Section>
        </MainLayout>
    )
}
