import { Helmet } from 'react-helmet-async'
import Header from '../components/html/Header'
import Footer from '../components/html/Footer'

export default function MainLayout({ children, title, description }) {
    return (
        <>
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={ description } />
            </Helmet>
            <main className="min-h-screen relative pt-14 pb-14">
                <Header />
                { children }
                <Footer />
            </main>
        </>
    )
}

MainLayout.defaultProps = {
    title: 'Mail & Guardian Jobs',
    description: 'Mail & Guardian offers listings to tenders and jobs in the non-profit, academic and government sectors.'
}