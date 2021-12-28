import React, {Component}  from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: '',
    }; 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  onHandleChange(){}
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(monsters.length)
    // console.log(filteredMonsters.length)
    return (
      <div className="App">
        <SearchBox placeholder='Search Monsters' handleChange={e => this.setState({searchField: e.target.value})}></SearchBox>
        <CardList monsters = {filteredMonsters}></CardList>  
      </div>
    )
  }
}

export default App;
