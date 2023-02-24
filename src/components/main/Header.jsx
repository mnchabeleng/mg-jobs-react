import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import MGLogoPNG from '../../assets/img/mglogo.png'

export default function Header() {
    return (
        <header>
            <TopNavbar />
            <div className='header'>
                <div className='col-1'></div>
                <div className='col-2'>
                    <Link className='brand' to='/'><img src={ MGLogoPNG } alt='MG Logo' /></Link>
                </div>
                <div className='col-3'></div>
            </div>
            <Navbar />
        </header>
    )
}