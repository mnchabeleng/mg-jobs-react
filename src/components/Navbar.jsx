import { useState } from 'react'
import Container from './Container'
import { Link, NavLink } from 'react-router-dom'
import {
    RiMenuLine,
    RiCloseLine
} from 'react-icons/ri'

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
            <nav className="bg-black text-gray-300 px-2 md:px-0 fixed left-0 right-0 top-0 z-20">
                <Container>
                    <div className="flex justify-between items-center h-14">
                        <div className="flex items-center gap-5">
                            <Link
                                className="text-gray-50 text-lg text-center font-bold"
                                to="/">
                                <span className="sr-only">Home</span>
                                <div>
                                    M<span className="text-red-600">&</span>G
                                </div>
                                <div className="font-light text-sm">
                                    Jobs and Tenders
                                </div>
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
                        <div
                            onClick={ () => setMobileOpen(prev => !prev) }
                            className="block md:hidden text-2xl">
                            {
                                mobileOpen
                                ?   <RiCloseLine />
                                :   <RiMenuLine />
                            }
                        </div>
                    </div>
                </Container>
            </nav>

            {
                mobileOpen
                &&  <div className="fixed md:hidden left-0 right-0 z-20 bg-black">
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
            }
        </>
    )
}
