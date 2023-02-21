import MainLayout from './MainLayout'

export default function MainSidebarLayout({ children, title, description }) {
    return (
        <MainLayout
            title={ title }
            description={ description }>{ children }</MainLayout>
    )
}