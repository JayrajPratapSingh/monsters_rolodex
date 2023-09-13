import { Component } from "react";
import CardList from "./components/card-list/CardList"
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMonster:""
    };
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  // use with bind method simple reguler function

handleChange(e){
  this.setState({searchMonster:e.target.value})
}

//use this function which is given below without bind method 

// handleChange =(e) =>{
//   this.setState({searchMonster:e.target.value})         
// }

  render() {
    const {monsters, searchMonster} = this.state;
   const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()  ))
   

    return (    
      <>
      <h1 className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-7 font-zcool text-4xl font-extrabold text-green-300">MONSTERS ROLODEX</h1>
      <div className="w-sm flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-7"><input type="search" onChange= {this.handleChange} placeholder="search monsters" className="rounded-md p-2 text-xl" /></div>
        <div className="flex  justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <CardList monsters = {filteredMonster} />
        </div>
      </>
    );
  }
}

export default App;