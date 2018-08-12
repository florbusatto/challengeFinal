import React, { Component } from 'react';
import './../css/searchBox.css';      

class searchBox extends Component {     

    constructor (props) {
    super(props);

    this.state = {
     products: [],
   }
 }
 componentDidMount () {     
    
    fetch('/')
     .then( response => {
       return response.json()
     })
     .then(data => {
       this.setState({ products: data.products})
     })
     .catch(err => {
     })
 }
 render() {
    return (
         <ul>
          {this.state.usuarios.map(u => <li>{u.name}</li>)}
         </ul>
    );  
  }
}


export default searchBox;