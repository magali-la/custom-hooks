import './App.css'
import DebounceSearchDemo from './components/DebounceSearchDemo'
import PaginationDemo from './components/PaginationDemo'

function App() {

  return (
    <div className='flex flex-col gap-8'>
      <h1>Pagination example</h1>
      <PaginationDemo />
      <h1>Debounce example</h1>
      <DebounceSearchDemo />
    </div>
  )
}

export default App
