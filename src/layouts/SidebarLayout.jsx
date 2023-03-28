import MainLayout from './MainLayout'
import Sidebar from '../components/main/Sidebar'

import Container from '../components/Container'

export default function SidebarLayout({ children, title, description }) {
    return (
        <MainLayout title={ title } description={ description }>
            <Container>
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1">{ children }</div>
                    <div className="lg:w-80 p-4"></div>
                </div>
            </Container>
        </MainLayout>
    )
}