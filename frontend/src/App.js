import React from "react";
import Home from "./components/Home";
import CustomeNavBar from "./components/NavBar";
import Books from "./components/Books/Books";
import Events from "./components/Events/Events";
import AddBook from "./components/Books/AddBook";

import {BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
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
