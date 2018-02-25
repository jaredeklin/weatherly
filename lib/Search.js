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
 
  submit(e) {
    if (e.keyCode === 13) {
      this.props.getLocation(this.state.location)
      localStorage.setItem('location', this.state.location)
    }
  }

  handleChange(e) {
    this.setState({ 
      location: (e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1),
      suggestions: this.trie.suggest(e.target.value) 
    })
  }

  render() {
    return (
      <section className="search-bar-section">
        <input  type="search" 
                className="search-bar" 
                placeholder="Search for a new location" 
                list="suggestions"
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

