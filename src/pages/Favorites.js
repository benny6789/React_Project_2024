import React,{useContext} from 'react'
import { AppContext } from '../context/Context'
import ResultsList from '../components/ResultsList'

export default function Favorites() {
  return (
    <div>
      Favorites
      <ResultsList/>
    </div>
  )
}
