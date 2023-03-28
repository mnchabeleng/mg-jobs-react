import Container from './Container'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="bg-black text-gray-300 fixed left-0 right-0 top-0 z-40">
            <Container>
                <div className="flex items-center h-14">
                    <div className="flex items-center gap-4">
                        <Link
                            className="text-gray-50 text-lg font-bold"
                            to="/">
                            <span className="sr-only">Home</span>
                            M&G Jobs
                        </Link>
                        <div className="flex gap-2">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/listings">Listings</NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
        <div>

        </div>
    </>
  )
}
