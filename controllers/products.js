var Product = require('../models/product');


function index(req, res){
    Product.find({}).then((products) => res.json(products))
}



module.exports = {
    index 
}