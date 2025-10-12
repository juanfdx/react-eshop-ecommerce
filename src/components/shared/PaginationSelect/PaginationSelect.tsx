import './PaginationSelect.scss';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';
// COMPONENTS
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { useEffect } from 'react';

type PaginationSelectProps = {
  currentPage: number;
  numOfPages: number;
  limit: number
  total: number
  small?: boolean;
  marginTop?: string
}


export const PaginationSelect = ({ currentPage, numOfPages, limit, total, small, marginTop }: PaginationSelectProps) => {

  const { setPage } = useFilterStore();
  const [searchParams, setSearchParams] = useSearchParams(); 
  
  // useEffect here
  useEffect(() => {
    const urlPage = searchParams.get('page');
    
    if (!urlPage)  setPage(1); 
    else setPage(Number(urlPage));
    
  }, [searchParams, setPage]);


  // Skip rendering if there's only one page of results
  if (total <= limit) return null;

  const smallButton = {
    minWidth : '42px',
    height : '42px',
  }

  //page numbers array
  const pageNumbers = Array.from({ length: numOfPages }, (_, index) => index + 1);


  const handlePageChange = (page: number) => {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
    setPage(page);
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
        <CustomSelect
          options={pageNumbers}
          value={currentPage}
          onChange={handlePageChange}
          small={small}
        />


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