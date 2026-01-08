import { useState } from "react"
import usePagination from "../customhooks/usePagination";

export default function PaginationDemo() {
    // set up the items array with 100 items
    const items: string[] = []

    for (let i=1; i <= 100; i++){
        items.push(`Item ${i}`);
    }

    const [selectItemsPerPage, setSelectItemsPerPage] = useState(10);

    // handle changing select
    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        // set number to the string value
        const numberChosen = Number(event.target.value)
        setSelectItemsPerPage(numberChosen)
    }

    // set up the pagination custom hook with arguments - amount of items, the user's selected items per page, the first page
    const pagination = usePagination(items.length, selectItemsPerPage, 1);

    return (
        <div className="flex flex-col rounded-2xl w-fit h-fit px-10 py-8 bg-blue-50 border-2 border-blue-200 gap-4">
            <h2 className="text-2xl">Pagination Demo</h2>
            <h4 className="text-xl">Total items: {items.length} </h4>
            {/* select and total items */}
            <div className="flex flex-row gap-6">
                <label htmlFor="itemsPerPage">Items per page:</label>
                <select id="itemsPerPage" value={selectItemsPerPage} onChange={handleSelect}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
            </div>
            {/* section with items */}
            {/* slice to get the items to display based on strt and end index from the items array, then map to add them to the list in a grid format*/}
            <ol className="grid grid-cols-5 gap-2">
                {items.slice(pagination.startIndex, pagination.endIndex).map((item) => (
                    <li>{item}</li>
                ))}
            </ol>
            {/* section with prev and next and items on that page  */}
            <div className="flex flex-row justify-between items-center gap-8">
                {/* set up disabled state from the can prev or next boolean if it's false disable the button */}
                <button className="bg-blue-500 py-4 px-8 cursor-pointer disabled:text-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed" onClick={pagination.prevPage} disabled={!pagination.canPrevPage}>{`<<`}Prev</button>
                <div>
                    <p>Page {pagination.currentPage} of {pagination.totalPages}</p>
                    <p className="italic">showing {pagination.itemsOnCurrentPage}/{items.length} items</p>
                </div>
                <button className="bg-blue-500 py-4 px-8 cursor-pointer disabled:text-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed" onClick={pagination.nextPage} disabled={!pagination.canNextPage}>Next {`>>`}</button>
            </div>
            {/* page number buttons */}
            <div>

            </div>
        </div>
    )
}