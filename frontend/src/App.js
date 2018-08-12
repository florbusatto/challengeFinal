import React, { Component } from 'react';     
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';   
import logo from './logo.svg';
import searchBox from './components/searchBox.js';   
import searchResults from './components/searchResult.js';
import productDetail from './components/productDetail.js'; 
import './App.css';

class App extends Component { 
 render() {
    return (
        <section className= "App">
           <Router>
             <section className= "routesApi">
              <Route exact path="/items" component={searchResult}/>
              <Route exact path='/items/:id' component={productDetail} />   
            </section>
          </Router>  
        </section>
    );
  }
}

export default App;