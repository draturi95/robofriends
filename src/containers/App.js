import React from 'react'; 
import CardList from '../components/CardList'; 
import SearchBox from '../components/SearchBox'; 
import './App.css'
import Scroll from '../components/Scroll.js'

class App extends React.Component{
	constructor(){ 
		super(); 
		this.state = {
		robot : [], 
		searchfield: ''
		}
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
			return response.json(); 
		}).then(users =>{
			return this.setState({robot : users});
		})
	}

	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value});
	}


	render(){
		const {robot, searchfield} = this.state; 

		const filterRobot = robot.filter(eachRobot =>{	
			return eachRobot.name.toLowerCase().includes(searchfield.toLowerCase())
		}); 
		return (!robot.length) ?
		(<h1> Loading </h1>) : 
		(
		<div className = 'tc'>
		<h1 className='f1 '><strong> Robofriends </strong> </h1> 
		<SearchBox searchChange = {this.onSearchChange}/>
		<Scroll> 
		<CardList robot={filterRobot}/>
		</Scroll>
		</div>); 
	}
}

export default App;  	