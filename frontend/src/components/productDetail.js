import React, { Component } from 'react'; 	   
import './../css/productDetail.css';       

class productDetail extends Component {   

  constructor (props) {
   super(props);

   this.state = {
     product: [],
   }
 }

 async componentDidMount () {   

  let response = await fetch('/id')
  let showDescription = await response.json()
    
  this.setState({ 
    product: showDescription  
  })
}

 render(){
     <div className="row mis-datos">
        <div className="col-sm-6 col-md-offset-4 col-md-4">
          <div className="thumbnail">
            <img src="http://thecatapi.com/api/images/get?format=src&type=gif" />

            <div className="caption">
              <h3>{this.state.usuario.nombre} {this.state.usuario.apellido}</h3>
              <p>Edad: {this.state.usuario.edad}</p>
              <p>Email: {this.state.usuario.email}</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
   

export default productDetail;
