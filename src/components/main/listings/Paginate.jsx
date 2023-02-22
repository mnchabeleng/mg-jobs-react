import { useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

export default function ListingsPaginaite({ pageCount }) {
    const navigate = useNavigate()

    function handlePageClick(e) {
        const page = e.selected + 1
        navigate(`?page=${ page }`)
    }
    
    return (
        <ReactPaginate
            previousLabel={ '← Previous' }
            nextLabel={ 'Next →' }
            pageCount={ pageCount }
            onPageChange={ (e) => handlePageClick(e) }
            containerClassName={ 'listings-pagination' }
            previousLinkClassName={ 'pagination-link' }
            nextLinkClassName={ 'pagination-link' }
            disabledClassName={ 'pagination-link-disabled' }
            activeClassName={ 'pagination-link-active' }
        />
    )
}