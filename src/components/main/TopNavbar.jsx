import {
        RiFacebookFill,
        RiInstagramFill,
        RiLinkedinFill,
        RiTwitterFill,
        RiYoutubeFill } from 'react-icons/ri'

export default function TopNavbar() {
    return (
        <div className="top-navbar">
            <div className="container">
                <ul className="social-menu">
                    <li><a href="#!"><RiFacebookFill /></a></li>
                    <li><a href="#!"><RiInstagramFill /></a></li>
                    <li><a href="#!"><RiLinkedinFill /></a></li>
                    <li><a href="#!"><RiTwitterFill /></a></li>
                    <li><a href="#!"><RiYoutubeFill /></a></li>
                </ul>
                <ul className="menu">
                </ul>
            </div>
        </div>
    )
}