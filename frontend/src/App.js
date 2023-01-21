import React, {useEffect} from "react";
import Home from "./components/Home";
import CustomeNavBar from "./components/NavBar";
import Books from "./components/Books/Books";
import Events from "./components/Events/Events";
import AddBook from "./components/Books/AddBook";
import { useDispatch } from 'react-redux';
import { getBooks } from './actions/books';
import { getEvents } from './actions/events'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
	
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getBooks())
	}, [])

	useEffect(()=>{
		dispatch(getEvents())
	}, [])

	return (
		<BrowserRouter>
		<CustomeNavBar/>
			<Switch>
				<Route exact path='/'> <Home/> </Route>
				<Route path='/books'> <Books/> </Route>
				<Route path='/events'><Events/></Route>
				<Route path='/addbooks'><AddBook/></Route>
			</Switch>
		</BrowserRouter> 
	);
}

export default App;
