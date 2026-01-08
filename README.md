# React Custom Hooks Lab

## Description
This project implements two custom React hooks to demonstrate advanced state management patterns like pagination and debounced search using React, TypeScript, and TailwindCSS. This lab was created as part of an assignment in Per Scholas Full Stack Engineering Bootcamp.

Live Site: https://lab10-2.netlify.app/ 

### Tech Stack
TypeScript
JavaScript

React
TailwindCSS

Vite
Netlify

## Features
### Pagination Demo
1. Users select how many items are viewable by page (10, 25, 30)
2. Users view total number of items, current page number, and items on each page
4. Users select pages manually or navigate with previous or next buttons
5. Includes disabled state for next and previous buttons at first and last pages

### Debounce Search
1. Debounced search input with 1500ms delay
2. Shows animated "Loading..." state while debouncing
3. Displays simulated search results after delay completes
4. Updates results on every new character typed

## Process
### usePagination custom hook
Created a custom usePagination hook that manages pagination state and logic and prepared a demo:

* Defined TypeScript interface with the return values' datatypes for the custom hook within `types.ts`
* Implemented boundary checking to ensure current page stays within valid range (1 to `totalPages`)
* Created navigation functions (nextPage, prevPage, setPage) and boolean checkers (canNextPage, canPrevPage) for controlling button disabled status in the UI
* Calculated start and end index to slice items array and display the correct items on each page

### Pagination Demo
* Created loop to generate page number buttons dynamically based on total pages
* Created conditional disabled based off pagination hook `canPrevPage` and `canNextPage` booleans
* Used dropdown to change itms per page with state management
* Used ternary to display active styling on page number buttons

### useDebounce custom hook
* Used useState to store debouncedValue
* Implemented `useEffect` with `setTimeout` for delay logic
* Cleanup function clears timer if value changes before delay fires
* Dependency array `[value, delay]` ensures proper effect triggering

### Debounce Demo
* Created controlled search input component
* Loading state and conditional render of search results

## Reflections
This project was challenging in ensuring the hooks were well constructed using best TypeScript practices, but proved useful in quickly applying functionality and calculating numbers needed.

**Challenge: calculating items on current page**: My first instinct was to use modulo operator to find the remainder that would be on the last page for items that aren't divisible by the itemsPerPage number, but this didn't account for the current page so I had errors with my 30 option. Switched to a math min which would return the correct count based on position in the array, and not a fixed remainder per page.

**Challenge: conditional rendering of loading and search results**: I learned how to use a nested ternary to ensure loading state appears prior to search results, otherwise displying nothing if there isnt a debounced value.


## Resources
This served as a starting point for constructing the custom hook for paginations
https://retool.com/blog/how-to-build-a-custom-pagination-component-in-react

