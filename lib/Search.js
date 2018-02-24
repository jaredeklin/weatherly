import React from 'react';
import '../Styles/Search.css';

const Search = ({searchACity}) => {
  
  const submit = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value)
    }
  }

  return (
    <section className="search-bar-section">

      <input  type="search" 
              className="search-bar" 
              placeholder="Search for a new location" 
              // onChange={ (e) => { console.log(e.target.value)} }
              onKeyDown={ (e) => submit(e) }
      />
    </section>
    
  );
};


export default Search;
