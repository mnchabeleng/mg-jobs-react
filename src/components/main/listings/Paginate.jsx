import styles from '../../../assets/css/main/components/Listings.module.css'
import ReactPaginate from 'react-paginate'

export default function ListingsPaginaite({ pageCount }) {
    function handlePageClick() {
        //
    }
    
    return (
        <ReactPaginate
            previousLabel={ '← Previous' }
            nextLabel={ 'Next →' }
            pageCount={ pageCount }
            onPageChange={ handlePageClick }
            containerClassName={ 'listings-pagination' }
            previousLinkClassName={ 'pagination-link' }
            nextLinkClassName={ 'pagination-link' }
            disabledClassName={ 'pagination-link-disabled' }
            activeClassName={ 'pagination-link-active' }
        />
    )
}