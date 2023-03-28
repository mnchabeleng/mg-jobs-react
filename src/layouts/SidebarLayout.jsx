import MainLayout from './MainLayout'
import Sidebar from '../components/main/Sidebar'

import Container from '../components/Container'

export default function SidebarLayout({ children, title, description }) {
    return (
        <MainLayout title={ title } description={ description }>
            <Container>
                <div className="flex flex-col md:flex-row">
                    <div>{ children }</div>
                    <div></div>
                </div>
            </Container>
        </MainLayout>
    )
}