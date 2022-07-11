import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({setPage, fetchRepo, searchQuery, page, totalPages, public_repos}) => {
    const handlePageClick = (page) => {
        setPage(page.selected + 1);
        fetchRepo(searchQuery, page.selected + 1)
    }
    return(
        <div className="paginationWrapper">
            <div className="paginationItems">
                {page * 4 - 3}-{page === totalPages ? public_repos : page * 4} of {public_repos} items
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLinkClassName="page"
                nextClassName="next"
                previousClassName="prev"
                nextLinkClassName="page"
                activeClassName="page_current"
                pageCount={totalPages}
                previousLabel="<"
                className="pagination"
                forcePage={page - 1}
            />
        </div>
    )
}

export default Pagination
