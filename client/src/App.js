import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css';
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home'
import Wrapper from './components/Wrapper'
import NavBar from './components/NavBar'
import Center from './components/Center'
import CenterBody from './components/CenterBody'
import CenterLinks from './components/CenterLinks'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'
import ProtectedRoute from './components/ProtectedRoute'
import UserProfile from './components/UserProfile'
import { SSL_OP_EPHEMERAL_RSA } from 'constants';



const DisplayLinks = props => {
	
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		// this.messages = []
		this.state = {
			loggedIn: false,
			user: null,
			messages: [
				{topic: "topic",
				location: "location",
				id: "1"
				},
				
				{topic: "topicOne",
				location: "locationTwo",
				id: "2" 
				}
			]
		}
		
		this.messages = this.state.messages.map((value, key)=>{
			return<li key={value.id} >
				{value.topic}
			</li>
		})

		
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get(
			"/messages"
		
		).then((r)=>{
			console.log("line onehundred",r)
			this.setState({messages: r.data.messages})
			console.log(this.state.messages)
			// this.messages = this.state.messages.map((value, key)=>{
			// 	return<li key={value._id} >
			// 	{value.text}
			// </li>
			// })
		}).catch((err)=>{
			console.log(err)
		})

		// axios.get('/auth/user').then(response => {
		// 	console.log(response.data)
		// 	if (!!response.data.user) {
		// 		console.log('THERE IS A USER')
		// 		this.setState({
		// 			loggedIn: true,
		// 			user: response.data.user
		// 		})
		// 	} else {
		// 		this.setState({
		// 			loggedIn: false,
		// 			user: null
		// 		})
		// 	}
		// })
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
				<h1>This is the main App component</h1>
				
				{/* LINKS to our different 'pages' */}
				<NavBar className="navBar">
					<Header user={this.state.user} />
					<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />

				</NavBar>				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Wrapper className="wrapper">


				<LeftSideBar 
						className="leftSideBar" 
						user = {this.state.user}
						usState = {this.state.state}
						setNewValue = {this.setNewValue}
						changeTwitterFn = {this.changeTwitterFocus}
						twitter_handle = {this.state.current_twitter_focus}
					/>

					{/* Center column showing main content based on user selections */}
					<Center className="center">

						{/* Top portion of columns showing different categories */}
						<CenterLinks className="centerLinks">
							<p className="test">
								centerLinks
							</p>
						</CenterLinks>

						{/* Main portion of center showing variable content */}
						<CenterBody user={this.state.user} className="centerBody">
							dummy text
							
							<ul>
								{/* <li> */}
									{this.messages}
								{/* </li> */}
							</ul>
							{/* <Route
								exact
								path="/login"
								render={() =>
									<LoginForm
										_login={this._login}
										_googleSignin={this._googleSignin}
									/>}
							/>
							<Route exact path="/signup" component={SignupForm} />

							<ProtectedRoute
								exact path="/profile"
								component={UserProfile}
								auth={this.state.loggedIn}
								loaded={this.state.loaded}
								user={this.state.user}
							/> */}
							
						</CenterBody>
					</Center>
					
					{/* Right column showing Twitter feed relevant to selection */}
					<RightSideBar className="rightSideBar">
						{/* <a className="twitter-timeline" data-width="500" href={"https://twitter.com/" + current_twitter_focus + "?ref_src=twsrc%5Etfw"}>Tweets!</a>} */}
						
						{/* <Route path="/" render={() => 
							<TwitterRout handle={current_twitter_focus} > } >
							</ TwitterRout> 
						/>  */}
						
						{/* <Route path="/" render={() =>
						}/> */}
						
					</RightSideBar>
				{/* <Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} /> */}
				{/* <LoginForm _login={this._login} /> */}
				</Wrapper>
			</div>
		)
	}
}

export default App
