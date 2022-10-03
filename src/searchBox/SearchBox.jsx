import React from 'react'
import './SearchBox.css'


function SearchBox({className, placeholder,onChangeHandler}) {
  return (
   <input 
   className={`search-box ${className}`}
   type='search'
   placeholder={placeholder}
   onChange={(e)=>onChangeHandler(e)}
   />
  )
}

export default SearchBox