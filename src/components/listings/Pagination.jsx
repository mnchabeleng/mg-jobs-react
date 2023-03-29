import { useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

export default function ListingsPaginaition({ pageCount }) {
    const navigate = useNavigate()

    function handlePageClick(e) {
        const page = e.selected + 1
        navigate(`?page=${ page }`)
    }
    
    return (
        <>
        {
            pageCount > 1
            &&  <ReactPaginate
                    previousLabel={ '← Previous' }
                    nextLabel={ 'Next →' }
                    pageCount={ pageCount }
                    onPageChange={ (e) => handlePageClick(e) }
                    containerClassName={ 'flex items-center gap-4' }
                    previousLinkClassName={ 'pagination-link' }
                    nextLinkClassName={ 'pagination-link' }
                    disabledClassName={ 'pagination-link-disabled' }
                    activeClassName={ 'pagination-link-active' } />
        }
        </>
    )
}