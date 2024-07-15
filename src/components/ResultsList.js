import { SearchResult } from "./SearchResult";
import { useEffect, useState} from "react";
import axios from 'axios';
export default function ResultsList (){
    const [list_ar,setList_Ar] = useState([]);
    
    
    useEffect(() => {
        doApi();
      },[])


      const doApi = async() => {
        try {
          const url = "https://randomuser.me/api/?results=10&seed=google";
          const data = await axios.get(url);
          console.log(data);
          setList_Ar(data);
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div className="container">
      {list_ar.map((item) => {
        return (
              <div key={item.uuid}style={{direction:"rtl",textAlign:"right"}}>
              <h4>{item.name}</h4>
                <h4>{item.age}</h4>
                <h4>{item.location}</h4>
                <h4>{item.picture}</h4>

              </div>
        )
      })}
      
  </div>
  );
};