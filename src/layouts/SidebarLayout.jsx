import MainLayout from './MainLayout'
import Sidebar from '../components/main/Sidebar'

export default function MainSidebarLayout({ children, title, description }) {
    return (
        <MainLayout title={ title } description={ description }>
            <div className="sidebar-layout">
                <div className="content">{ children }</div>
                <Sidebar />
            </div>
        </MainLayout>
    )
}