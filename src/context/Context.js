import { createContext, useLayoutEffect, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props){
   const [favorites_ar,setFavorites_ar] = useState([]);

useLayoutEffect(() => {
    if(localStorage.getItem("favorites_ar")){
        setFavorites_ar(JSON.parse(localStorage.getItem("favorites_ar")))
    }
  },[])

const addFavorite = (newItem) => {
    setFavorites_ar([...favorites_ar,newItem]);
    localStorage.setItem("favorites_ar",JSON.stringify([...favorites_ar,newItem]))
  }

  const resetAllFavorites = () => {
    setFavorites_ar([]);
    localStorage.setItem("favorites_ar",JSON.stringify([]))
  }

  const deleteFavorite = (del_id) => {
    const filter_ar = favorites_ar.filter(item => item.id != del_id)
    setFavorites_ar(filter_ar);
    localStorage.setItem("favorites_ar",JSON.stringify(filter_ar))
  }

  const updateFavorite = (updateItem) => {
    const map_ar = favorites_ar.map((item) => {
      if(item.id == updateItem.id){
        item = updateItem
      }
      return item;
    }) 
    setFavorites_ar(map_ar)
    localStorage.setItem("favorites_ar",JSON.stringify(map_ar))
  }

  const globalValue = {
    favorites_ar,addFavorite,deleteFavorite

  }
 
  return (
    <AppContext.Provider value={globalValue} >
      {props.children}
    </AppContext.Provider>
  )
 }