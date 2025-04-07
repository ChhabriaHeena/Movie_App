import React from 'react'

const Search = ({ searchTerm, setSearchTerm }: { searchTerm: any; setSearchTerm: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="search" />
            <input type="text" placeholder='Search through thousands of movies'
            value={searchTerm} 
            onChange={(event)=> setSearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search;
