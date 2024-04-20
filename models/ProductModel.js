var mongoose = require('mongoose')
var ProductSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Brand: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
        Image: String,
        quantity: Number,
        color:String
    }
)
var ProductModel = mongoose.model('product', ProductSchema, 'product');
module.exports=ProductModel