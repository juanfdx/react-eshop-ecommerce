import './Pagination.scss';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
// STORE
import { useFilterStore } from '../../../stores/useFilterStore';

type PaginationProps = {
  currentPage: number;
  numOfPages: number;
  limit: number
  total: number
  small?: boolean;
  marginTop?: string
}


export const Pagination = ({ currentPage, numOfPages, limit, total, small, marginTop }: PaginationProps) => {

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
  


  // page button generator
  const addPageButton = ({ pageNumber, activeClass }: { pageNumber: number, activeClass: boolean }) => {
    return (
      <button
        key={pageNumber}
        style={small ? smallButton : undefined}
        className={`pagination__btn ${(activeClass) ? 'pagination__btn--active' : ''}`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    )
  }

  // page number button generator
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3; // maximum number of visible page number buttons

    if (numOfPages <= maxVisiblePages) {
      // display all pages if numOfPages are less than or equal to maxVisiblePages
      for (let i = 1; i <= numOfPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            style={small ? smallButton : undefined}
            className={`pagination__btn ${(currentPage == i) ? 'pagination__btn--active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

    } 
    else {
      // display a subset of pages with ellipses
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(numOfPages, startPage + maxVisiblePages - 1);

      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;

      } else if (currentPage >= numOfPages - Math.floor(maxVisiblePages / 2)) {
        startPage = numOfPages - maxVisiblePages + 1;
        endPage = numOfPages;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            style={small ? smallButton : undefined}
            className={`pagination__btn ${(currentPage === i) ? 'pagination__btn--active' : ''}`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage > Math.ceil(maxVisiblePages / 2) + 0) {     
        pageNumbers.unshift(
          <button 
            key={'start-dots'} 
            style={small ? smallButton : undefined}
            className='pagination__btn pagination__btn--disabled pagination__btn--align'
          >
            ...
          </button>
        );
        //first button
        pageNumbers.unshift(addPageButton({ pageNumber: 1, activeClass: currentPage === 1 }))
      }

      if (currentPage < numOfPages - Math.floor(maxVisiblePages / 2)) {
        pageNumbers.push(
          <button 
            key={'end-dots'} 
            style={small ? smallButton : undefined}
            className='pagination__btn pagination__btn--disabled pagination__btn--align'
          >
            ...
          </button>
        );
        //last button
        pageNumbers.push(addPageButton({ pageNumber: numOfPages, activeClass: currentPage === numOfPages }));
      }
    }

    return pageNumbers;
  }




  return (
    <div 
      className='pagination'
      style={marginTop ? { marginTop: marginTop } : undefined}
    >
      <div className='pagination__container'>

        {/* PREV BUTTON */}
        <button 
          style={small ? smallButton : undefined}
          className={`
            pagination__btn 
            pagination__btn--prev
            ${(currentPage === 1) ? 'pagination__btn--disabled' : ''}
          `}
          onClick={() => {
            const prevPage = currentPage - 1;
            if (prevPage < 1) return;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>

        {/* PAGE NUMBER BUTTONS */}
        { generatePageNumbers() }

        {/* NEXT BUTTON */}
        <button 
          style={small ? smallButton : undefined}
          className={`
            pagination__btn 
            pagination__btn--next
            ${(currentPage === pageNumbers.length) ? 'pagination__btn--disabled' : ''}
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