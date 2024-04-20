var mongoose = require('mongoose')
var GokuSchema = new mongoose.Schema(
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
var GokuModel = mongoose.model('goku', GokuSchema, 'goku');
module.exports= GokuModel