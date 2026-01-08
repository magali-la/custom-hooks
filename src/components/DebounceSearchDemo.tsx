import { useEffect, useState } from "react";
import useDebounce from "../customhooks/useDebounce"

export default function DebounceSearchDemo() {
    // use state for controlled serch
    const [searchInput, setSearchInput] = useState<string>('');
    // set up state for loading
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // handler for search updates on state
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        const searchTerm = event.target.value;
        setSearchInput(searchTerm);
    }

    // // set up debounce variable with input
    const debouncedValue = useDebounce(searchInput, 1500);

    // set a useEffect to listen to both input and debounced value to get a loader
    useEffect(() => {
        // if the debounced value hasn't shown up yet, show a loader once the input is being typed and isn't just an empty string
        if (searchInput !== '' && !debouncedValue) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [searchInput, debouncedValue]);

    return (
        <div className="flex flex-col rounded-2xl w-fit h-fit px-10 py-8 bg-green-50 border-2 border-green-200 gap-4">
            <h2 className="text-2xl">Debounce Search Demo</h2>
            <p className="place-self-start">Debounce Delay (ms): 1500</p>
            {/* input section */}
            <div className="flex flex-col gap-2">
                <label htmlFor="searchInput">Search</label>
                <input id="searchInput" type="text" className="bg-white rounded-2xl border border-green-400 focus-visible:outline-2 focus-visible:outline-green-400 py-1 px-2" value={searchInput} onChange={handleSearch}/>
            </div>
            {/* section with inputs */}
            <div className="flex flex-col gap-2 text-left">
                <p>Current Input: {searchInput} </p>
                <p>Debounced Input Value: {debouncedValue}</p>

                {/* set up conditional rendering base off if there's a debounced value with a loader before */}
                <div>
                    <p>Simulated Search Results</p>
                    {isLoading ? (
                        <div className="animate-pulse">Loading...</div>
                    ) : debouncedValue ? (
                        <ol>
                            <li>Result for '{debouncedValue}': item 1</li>
                            <li>Result for '{debouncedValue}': item 2</li>
                            <li>Result for '{debouncedValue}': item 3</li>
                        </ol>
                    ) : null}
                </div>              
            </div>
        </div>
    )
}