import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      location: ""
  }

  this.submit = this.submit.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }
 
  submit(e) {
    if (e.keyCode === 13) {
      this.props.getLocation(this.state.location)
      this.props.getWeatherData(this.state.location)
      localStorage.setItem('location', this.state.location)
    }
  }

  handleChange(e) {
    this.setState({ location: e.target.value })
  }

  render() {
    return (
      <section className="search-bar-section">
        <input  type="search" 
                className="search-bar" 
                placeholder="Search for a new location" 
                onChange={ this.handleChange }
                onKeyDown={ this.submit } />
      </section> 
    );
  }
};

Search.propTypes = {
  userInput: PropTypes.string, 
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
