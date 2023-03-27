import MainLayout from './MainLayout'
import Sidebar from '../components/main/Sidebar'

export default function MainSidebarLayout({ children, title, description }) {
    return (
        <MainLayout title={ title } description={ description }>
            <div className="flex flex-col md:flex-row">
                <div>{ children }</div>
                <div></div>
            </div>
        </MainLayout>
    )
}