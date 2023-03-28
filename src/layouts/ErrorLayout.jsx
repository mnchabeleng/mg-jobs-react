import { Helmet } from 'react-helmet-async'

export default function ErrorLayout({ title, description }) {
  return (
    <>
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ description } />
        </Helmet>
        <main className="min-h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="font-bold text-2xl md:text-4xl">
                    <span className="sr-only">Error</span> { title }
                </h1>
                <p>
                    { description }
                </p>
            </div>
        </main>
    </>
  )
}
