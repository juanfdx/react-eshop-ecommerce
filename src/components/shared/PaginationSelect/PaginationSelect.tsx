import './PaginationSelect.scss';
import { useLocation, useNavigate } from 'react-router';
// COMPONENTS
import { FaAngleDown } from 'react-icons/fa6';

type PaginationSelectProps = {
  currentPage: number;
  numOfPages: number;
  limit: number
  total: number
  small?: boolean;
  marginTop?: string
}


export const PaginationSelect = ({ currentPage, numOfPages, limit, total, small, marginTop }: PaginationSelectProps) => {

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  
  // Skip rendering if there's only one page of results
  if (total <= limit) return null;


  const smallButton = {
    minWidth : '42px',
    height : '42px',
  }

 
  //page numbers array
  const pageNumbers = Array.from({ length: numOfPages }, (_, index) => index + 1);


  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    searchParams.set('page', String(page));
    navigate(`${pathname}?${searchParams.toString()}`, { replace: true });
  }


  
  return (
    <div 
      className='pagination-select'
      style={marginTop ? { marginTop } : undefined}
    >
      <div className='pagination-select__container'>

        {/* PREV BUTTON */}
        <button 
          style={small ? smallButton : undefined}
          className={`
            pagination-select__btn 
            pagination-select__btn--prev
            ${(currentPage === 1) ? 'pagination-select__btn--disabled' : ''}
          `}
          onClick={() => {
            const prevPage = currentPage - 1;
            if (prevPage < 1) return;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>


        {/* PAGE BUTTONS */}
        <div className='pagination-select__select-container'>
          <select 
            id="pagination-select"
            style={small ? smallButton : undefined}
            className='pagination-select__select'
            name="pagination-select" 
            value={currentPage}
            onChange={(e)=> handlePageChange(Number(e.target.value))}
          >
            {pageNumbers?.map(pageNumber => (

              <option key={pageNumber} value={pageNumber} >{pageNumber}</option>

            ))}

          </select>

          <FaAngleDown className='pagination-select__arrow-down' />

        </div>


        {/* NEXT BUTTON */}
        <button 
          style={small ? smallButton : undefined}
          className={`
            pagination-select__btn 
            pagination-select__btn--next
            ${(currentPage === pageNumbers.length) ? 'pagination-select__btn--disabled' : ''}
          `}
          onClick={() => {
            const nextPage = currentPage + 1;
            if (nextPage > pageNumbers.length) return;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>

      </div>
    </div>
  )
}