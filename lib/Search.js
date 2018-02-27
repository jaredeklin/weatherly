import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Search.css';
import Trie from '@jaredeklin/complete-me/lib/Trie';
import cities from './largest1000Cities';


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      suggestions: []
    }

    this.trie = new Trie();
    this.trie.populate(cities.data)    
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  submit(event) {
    if (event.keyCode === 13) {
      this.props.getLocation(this.state.location)
      localStorage.setItem('location', this.state.location)
      this.setState({location: ''})
    }
  }

  handleChange(event) {
    this.setState({ 
      location: (event.target.value).charAt(0).toUpperCase() + (event.target.value).slice(1),
      suggestions: this.trie.suggest(event.target.value) 
    })
  }

  render() {
    return (
      <section>
        <input  type="search" 
                className="search-bar" 
                placeholder="Search for a City, State or Zip Code" 
                list="suggestions"
                value={this.state.location}
                onChange={ this.handleChange }
                onKeyDown={ this.submit } />
       <datalist
          id='suggestions'>
          {
            this.state.suggestions.map((suggestion, i) => {
              if (i < 5) {
                return <option key={i} value={suggestion} />;
              }
            })
          }
        </datalist>
      </section> 
    );
  }
};

Search.propTypes = {
  userInput: PropTypes.string, 
};

export default Search;

