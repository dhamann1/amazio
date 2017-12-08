var mongoose = require('mongoose');
var Product = require('./product');
var Schema = mongoose.Schema;


var orderSchema = new Schema({
    products: [{type: Schema.Types.ObjectId, Ref: "Product"}] 
})


module.exports = mongoose.model("Order", orderSchema); 