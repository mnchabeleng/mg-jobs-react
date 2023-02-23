import MainLayout from '../../../layouts/MainLayout'

export default function Error404Page() {
    return (
        <MainLayout title='Error 404' description='Page not found'>
            <section className='px'>
                <div className='container'>
                    <h1 className='page-title'>Error 404</h1>
                    <p>Page not found</p>
                </div>
            </section>
        </MainLayout>
    )
}