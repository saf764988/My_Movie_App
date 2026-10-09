//import React from 'react'

const Search = ({ searchTerm, setsearchTerm }) => {
  return (
    <div className="search">
    <div>
      <img src="search.svg" alt="search-icon" />
      <input 
      type="text" 
      placeholder="Search what you Love "
      value={searchTerm}
      onChange={(event) => setsearchTerm(event.target.value)}
      />
    </div>
    </div>
  )
}

export default Search