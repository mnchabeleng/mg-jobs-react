import '../../assets/scss/main/style.scss'

export default function PageLoader({ children }) {
    return (
        <div className='page-loader'>
            <div>
                { children }
            </div>
        </div>
    )
}