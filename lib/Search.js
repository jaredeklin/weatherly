import React from 'react';
import '../Styles/Search.css';
// import App from './App'


class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      city: ""
    }
  }
 
  
  submit(e) {
    if (e.keyCode === 13) {

      console.log(this.props.location)
      // this.setState({city: e.target.value})
      this.props.location.getLocation(e.target.value)
    }
  }

  render() {
    return (
      <section className="search-bar-section">

        <input  type="search" 
                className="search-bar" 
                placeholder="Search for a new location" 
                onChange={ (e) => { console.log(e.target.value)} }
                onKeyDown={ (e) => this.submit(e) }
                  
        />
      </section> 
    );
  }
};


export default Search;


// const Search = ({location}) => {
  
//   const submit = (e) => {
//     if (e.keyCode === 13) {
//       // console.log(e.target.value)
//       console.log(location)
//       location.getValue()
//     }
//   }

//   return (
//     <section className="search-bar-section">

//       <input  type="search" 
//               className="search-bar" 
//               placeholder="Search for a new location" 
//               // onChange={ (e) => { console.log(e.target.value)} }
//               onKeyDown={ (e) => submit(e) }
//       />
//     </section>
    
//   );
// };


// export default Search;
