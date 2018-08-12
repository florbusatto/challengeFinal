import React, { Component } from 'react';
import './../css/searchResult.css';	    

class searchResult extends Component { 	

  constructor (props) {
   super(props);
   this.state = {
     items: [],
   };
 }

 componentDidMount () { 
   fetch('/items')
     .then( response => {
       return response.json()
     })
     .then(data => {
       this.setState({ items: data.items})
     })
     .catch(err => {
     })
 }
 render(){
   var my_items = this.state.items.map(i => { 
     return <div className='itemDetail'>{},{}</div>
   })
     return (    
             <h1>soy un item </h1>
        ); 
    }
}

export default searchResult;
             