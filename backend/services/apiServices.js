const axios = require('axios')  
const fetch = require('node-fetch');
const self = {};     
//Declaro las constantes para construir los estados de error.

const notInternet = () => !internet();  
const internet = () => Math.random() >= 0.5;

self.getItems = function (input){
    let searchResults = {}
    return.fetch ('https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4')
    .then(res => res.data.getItems)
    .then(data =>  {  
        const products = data.results 
        const categories = data.categories  

    searchResults= {
                    'author': {
                               'name': 'Maria Florencia',
                               'surname':'Busatto',  
                   },
                   'items': [products.map(i=>i.items)],{   
                 
                   let newProduct = {
                                     "id": i.id,
                                     "title": i.title,
                                     "price": {
                                                "currency": i.currency_id,
                                                "amount": i.amount,
                                                "decimals": i.price_decimals,
                                    },
                                    "picture": i.thumbnail,
                                    "condition": i.condition,
                                    "free_shipping": ishipping.free_shipping,   
                                    }
                   return newProduct   
                  }), 
                  categories: [
                               'Tecnologìa',
                               'Celulares',
                               'Iphone',        
                            ],
                 }
                return searchResults;
          }) 
          .catch (error => {
           if(error.code === 'ENOTFOUND' && notInternet()) {    
           res.status(503).send('Service unavailable')
         } else if(error.code === 'ENOTFOUND' && internet()) {  
           res.status(502).send('Bad Gateway')    
         } else {
           res.status(500).send('Internal Server Error')
        }   
    })    
});     

self.itemSelected = function(id){

    let itemDescription = {};
    return Promise.all([ axios.get(`https://api.mercadolibre.com/items/${id}`),
                         axios.get(`https://api.mercadolibre.com/items/${id}/description`)])
     .then(response => {
         var i = response[0].data;
         var d = response[1].data;

         itemDescription = {
                            "author": {
                                       'name': 'Maria Florencia',
                                       'surname':'Busatto',  
                            },
                            "item":{          
                                "id": i.id,
                                "title": i.title, 
                                "price": {
                                            "currency": i.currency_id,
                                            "amount": i.amount,
                                            "decimals": i.price_decimals,
                                        },
                                 "picture": i.thumbnail,
                                 "condition": i.condition,
                                 "free_shipping": i.shipping.free_shipping,
                                 "sold_quantity": i.sold_quantity,
                                 "description": d.plain_text
                                        },
                              categories: [
                               'Tecnologìa',
                               'Celulares',
                               'Iphone',        
                            ],
                 }
                return itemDescription;
                            
        })      
        .catch (error => {
           if(error.code === 'ENOTFOUND' && notInternet()) {    
           res.status(503).send('Service unavailable')
         } else if(error.code === 'ENOTFOUND' && internet()) {  
           res.status(502).send('Bad Gateway')    
         } else {
           res.status(500).send('Internal Server Error')
        }   
    })    
});     

module.exports = self;  

//recordar que el fetch es para react, hay que npm install e importarlo.
