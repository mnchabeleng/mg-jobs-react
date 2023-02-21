import styles from '../../assets/css/main/layouts/MainLayout.module.css'
import { Helmet } from 'react-helmet-async'
import Header from '../../components/main/Header'
import Footer from '../../components/main/Footer'

export default function MainLayout({ children, title, description }) {
    return (
        <>
            <Helmet>
                <title>{ title }</title>
                <meta name="description" content={ description } />
            </Helmet>

            <Header />
            
            <main className={ styles.main }>
                { children }
            </main>
            
            <Footer />
        </>
    )
}

MainLayout.defaultProps = {
    title: 'Mail & Guardian Jobs',
    description: 'South Africa’s best jobs in the non-profit, academic and government sectors.'
}