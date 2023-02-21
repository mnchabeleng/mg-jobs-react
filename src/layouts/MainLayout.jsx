import '../assets/scss/main/style.scss'

import { Helmet } from 'react-helmet-async'
import Header from '../components/main/Header'
import Footer from '../components/main/Footer'

export default function MainLayout({ children, title, description }) {
    return (
        <>
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={ description } />
            </Helmet>
            <div className='main-layout'>
                <Header />
                <main>{ children }</main>
                <Footer />
            </div>
        </>
    )
}

MainLayout.defaultProps = {
    title: 'Mail & Guardian Jobs',
    description: 'South Africa’s best jobs in the non-profit, academic and government sectors.'
}