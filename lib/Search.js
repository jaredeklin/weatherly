import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Search.css';
// import App from './App'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
  this.submit = this.submit.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }
 
  submit(e) {
    if (e.keyCode === 13) {

      // console.log(this.props.getLocation)
      this.props.getLocation(this.state.userInput)
    }
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <section className="search-bar-section">
        <input  type="search" 
                className="search-bar" 
                placeholder="Search for a new location" 
                onChange={this.handleChange}
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
