import React, {Component} from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import "./App.css"
import Scroll from "./Scroll"

class App extends Component{
    constructor(){
        super(); 
        this.state = {
            robots: [],
            searchField: ""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) =>{
                return response.json();
            })
            .then((robots)=>{
                this.setState({robots: robots})
            })
    }
    onSearchChange = (event)=>{
        this.setState({searchField: event.target.value})
       
    }
    render(){
        const filteredRobots = this.state.robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(!this.state.robots.length){
            return <h1>LOADING...</h1>
        }else{
            return(
                <div className="tc">   
                    <h1>Robo Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;