import { useState } from 'react'
import Container from './Container'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
            <nav className="bg-black text-gray-300 px-2 md:px-0 fixed left-0 right-0 top-0 z-20">
                <Container>
                    <div className="flex items-center h-14">
                        <div className="flex items-center gap-5">
                            <Link
                                className="text-gray-50 text-lg font-bold"
                                to="/">
                                <span className="sr-only">Home</span>
                                M&G Jobs
                            </Link>
                            <div className="hidden md:flex gap-3">
                                <NavLink
                                    end
                                    to="/">
                                    Home
                                </NavLink>

                                <NavLink
                                    end
                                    to="/listings">
                                    Listings
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>

            <div className="fixed md:hidden left-0 right-0 z-20 bg-black">
                <Container>
                    <div className="flex flex-col text-gray-300 font-lg px-2 transition-all">
                        <NavLink
                            end
                            className="py-3 hover:text-gray-50"
                            to="/">
                            Home
                        </NavLink>

                        <NavLink
                            end
                            className="py-3 hover:text-gray-50"
                            to="/listings">
                            Listings
                        </NavLink>
                    </div>
                </Container>
            </div>
        </>
    )
}
