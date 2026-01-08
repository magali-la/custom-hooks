import { useState } from "react";
import type { PaginationReturn } from "../types/types";

export default function usePagination(totalItems: number, itemsPerPage: number, initialPage: number): PaginationReturn {
    // set state to check the current page
    const [currentPage, setCurrentPage] = useState(initialPage);

    // calculate total pages based off the items available in the list and the items per page from the user
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // function to change page and set state for the pge
    function setPage(pageNumber: number) {
        // make sure its within bounds between 1 and the totalPages
        if (pageNumber < 1) {
            setCurrentPage(1);
        } else if (pageNumber > totalPages) {
            setCurrentPage(totalPages);
        } else {
            // set it as the page number they clicked or the one they navigated to via buttons
            setCurrentPage(pageNumber);
        }
    }

    // start and end index for the items displayed on the array - will be used for slicing and figuring out what will be displayed
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // how many items are actually on each page - modulo to get remainder which will be on the last page if it's not divisible
    const itemsOnCurrentPage = totalItems % itemsPerPage || itemsPerPage;

    // boolean condition to check if the user can go to the next page or not, possibly use it for styling disabled state for next and back buttons - if the current page is < total pages, then we can else if the current paage is > 1 then we can go back
    const canNextPage = currentPage < totalPages;
    const canPrevPage = currentPage > 1

    // functions for moving to next or previous page - the setPage function will already handle checking if the next or prev is possible. but since the boolen will control conditional styling, it might not be necessary
    function nextPage() {
        setPage(currentPage + 1);
    }

    function prevPage() {
        setPage(currentPage - 1);
    }

    // export values
    return { 
        currentPage, totalPages, startIndex, endIndex, itemsOnCurrentPage, setPage, nextPage, prevPage, canNextPage, canPrevPage 
    }
}