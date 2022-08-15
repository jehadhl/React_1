import React , {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll'


class App extends Component {
  
   constructor () {
    super()
    this.state = {
      robots:[],
      searchflied :''
    }
    console.log("constru")
   }

   componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

   onSearchChange= (e) => {
    this.setState({searchflied:e.target.value})
   }

   

  render() {
  const {robots , searchflied} = this.state
  const filterCard = robots.filter((robot)=> {
    return robot.name.toLowerCase().includes(searchflied.toLowerCase())
     }) 
      if(!this.state.robots.length){
        console.log(this.state.robots.length)
          return <h1>Loding</h1>
      }
      else {
        return(
      <div  className="tc ">
        <h1 className="f1">Robots Friend</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
         <CardList robots={filterCard} />
        </Scroll>
      </div>
        )
      }
  }
} 
export default App