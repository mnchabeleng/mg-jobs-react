import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div className='navbar'>
            <nav>
                <div className='container'>
                    <div onClick={ () => setMobileMenu(prev => !prev) } className='menu-toggle'>
                        { !mobileMenu ? <RiMenuLine /> : <RiCloseLine /> }
                    </div>
                    <ul className='menu'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/listings' end>Listings</NavLink></li>
                    </ul>
                </div>
            </nav>
            {
                mobileMenu
                && <ul className='menu-mobile'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/listings' end>Listings</NavLink></li>
                </ul>
            }
        </div>
    )
}