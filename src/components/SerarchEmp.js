import React,{useState,useEffect} from 'react'
import axios from "axios";
import {FaSearch} from "react-icons/fa";

import {useNavigate} from "react-router-dom";
import '../css/search_bar.css'
export default function SerarchEmp() {
    const nav = useNavigate();

  return (
    <div className = "input-wrapper">
        <FaSearch id = "search-icon"/>
        <input placeholder="type to search..." />
        
        {/* <div className='search-bar-container'>
        </div>
        <div>search Bar</div> */}

      
    </div>
  )
}
