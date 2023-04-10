import MainLayout from './MainLayout'
import Container from '../components/Container'

export default function SidebarLayout({ children, title, description }) {
    return (
        <MainLayout title={ title } description={ description }>
            <Container>
                <div className="flex flex-col lg:flex-row">
                    { children }
                </div>
            </Container>
        </MainLayout>
    )
}