import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="copy">
                <Link to="/">&copy; Mail & Guardian Jobs</Link>
            </div>
        </footer>
    )
}