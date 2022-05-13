import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    const handlePageClick = (page) => {
        props.setPage(page.selected + 1);
        props.fetchRepo(props.searchQuery, page.selected + 1)
    }
    return(
        <div className="paginationWrapper">
            <div className="paginationItems">
                {props.page * 4 - 3}-{props.page === props.totalPages ? props.public_repos : props.page * 4} of {props.public_repos} items
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
                pageCount={props.totalPages}
                previousLabel="<"
                className="pagination"
                forcePage={props.page - 1}
            />
        </div>
    )
}

export default Pagination