import React,{useContext} from 'react'
import { AppContext } from '../context/Context'
import SerarchEmp from '../components/SerarchEmp'
import { SearchResult } from '../components/SearchResult';
import ResultsList from '../components/ResultsList';
import '../css/search.css';


export default function Home() {
//   const {counter} = useContext(AppContext)

  return (
    <div className='container'>
      <h1>Home</h1>
      <div className='search-bar-container'>
        
      <SerarchEmp/>
      <SearchResult/>
      <ResultsList/>
      {/* <div>search Results</div> */}

        </div>
      
    </div>
  )
}
