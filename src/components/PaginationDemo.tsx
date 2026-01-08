import { useState } from "react"

export default function PaginationDemo() {
    const [selectItemsPerPage, setSelectItemsPerPage] = useState(10);

    // handle changing select
    function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        // set number to the string value
        const numberChosen = Number(event.target.value)
        setSelectItemsPerPage(numberChosen)
    }

    return (
        <div className="flex flex-col rounded-2xl w-fit h-fit px-10 py-8 bg-blue-50 border-2 border-blue-200">
            <h2 className="text-2xl">Pagination Demo</h2>
            <h4 className="text-xl">Total items: </h4>
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
            <div>

            </div>
            {/* page number buttons */}
            <div>

            </div>
        </div>
    )
}