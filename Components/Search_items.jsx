import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' ;
import {product} from '../productData';
const Search_items = () => {
    const {term}=useParams();
    const [filterData,setFilterData]=useState([]);

    useEffect(()=>{
        const filterData=()=>{
            setFilterData(product.filter((data)=>data.title.toLowerCase().includes(term.toLowerCase())));
        }
        filterData();
    },[term])

    console.log(filterData);
  return (
    <div>
      Search_items-{term}
    </div>
  )
}

export default Search_items
