import React from 'react'
import './dashboard.css'

const Pagination = ({ postsPerPage, length, handlePagination, currentPage }) => {
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++){
        paginationNumbers.push(i)
    }

  return (
    <div>
        {
            paginationNumbers.map((pageNumber, id) => {
                return <span key={id} className="pagination-button">
                    <button  onClick={() => handlePagination(pageNumber)} key={pageNumber}>
                        <p>{pageNumber}</p>
                    </button>
                </span>
            })
        }
    </div>
  )
}

export default Pagination
