const apiServices = require('./../services/apiServices');
const self = {} 

self.apiItems = async function(req, res, next){  
  let input = req.query.q;
  let products = await apiServices.getItems(input);
  res.json(products);   
} 

self.apiItemsId = async function(req,res,next){
  let id = req.params.id
  let productId = await apiServices.itemSelected(id);
  res.json(productId);
}

module.exports = self;