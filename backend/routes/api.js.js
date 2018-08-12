var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

//Items page Route//
router.get('/items/',apiController.apiItems)	

//Items/:id page Route//
router.get('/items/:id',apiController.apiItemsId)		

module.exports = router;