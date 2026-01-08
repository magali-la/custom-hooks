import { useEffect, useState } from "react"

export default function useDebounce(value: string, delay: number): string {
    // set up useState based on the input value
    const [debouncedValue, setDebouncedValue] = useState(value);

    // set a use effect to look out for changes in value with a settimeout - dependency array is listening for changes in the value
    useEffect(() => {
        // timer set to the amount declared in the argument for the custom hook
        const timer = setTimeout(() => {
            // after the delay denoted, then set the debouncedValue
            setDebouncedValue(value)
        }, delay);

        // reset the timer /cleanup if there are any changes made to the value before the time is up
        return () => clearTimeout(timer);
    }, [value, delay])

    return debouncedValue;
}