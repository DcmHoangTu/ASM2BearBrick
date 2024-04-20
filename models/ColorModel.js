var mongoose = require('mongoose')
var ColorSchema = new mongoose.Schema(
    {
        color:String
        
    }
)
var ColorModel = mongoose.model('color', ColorSchema, 'color');
module.exports= ColorModel