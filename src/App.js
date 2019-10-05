import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/searchBox/searchBox.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleSearch = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
        <div className='App'>
          <h1>Monsters Rolodex</h1>
          <SearchBox handleChange={this.handleSearch} placeholder='search monster'/>
          <CardList monsters={filteredMonsters}>
          </CardList>
        </div>
    );
  }
}

export default App;
