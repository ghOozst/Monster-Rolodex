import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component.jsx"
import {SearchBox} from "./components/searchbox/searchbox.component.jsx"
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField:""
    }
  }

  componentDidMount(){
    //Getting the data of the users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> response.json())
      .then(users=>this.setState({monsters:users}))
  }
  render(){
    //Creatting a variable for the monsters and the searchField from state
    const {monsters, searchField} =this.state;
    //Filtering the monsters on what the client types
    const filteredMonsters=monsters.filter(monster=> 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder="search monster" 
          handleChange={e=> this.setState({searchField: e.target.value})}
          />

        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    )
  }
}

export default App;
