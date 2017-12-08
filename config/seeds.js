var mongoose=require('mongoose');
var Product=require('../models/product');
var productdata=require('./productdata');
require('./database'); 


Product.remove({}).then( () => {
    return Product.create(productdata)

})
.then((product) => {
    console.log(product)
    mongoose.connection.close()
    process.exit()
})

