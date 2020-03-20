import React, { Component } from 'react'
import { Provider} from 'react-redux'
import {Route,BrowserRouter as Router,Redirect,Switch} from 'react-router-dom'
import store from './store/index'
import Home from './components/home'
import './App.css'
export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Home></Home>
			</Provider>
		)
	}
}
export default App

