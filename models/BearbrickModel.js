var mongoose = require('mongoose');

var BearbrickSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true  // Sửa 'require' thành 'required'
    },
    Brand: {
        type: String,
        required: true  // Sửa 'require' thành 'required'
    },
    Price: {
        type: Number,
        required: true  // Sửa 'require' thành 'required'
    },
    Image: String,
    quantity: Number,
    color:String
});

var BearbrickModel = mongoose.model('bearbrick', BearbrickSchema, 'bearbrick');
module.exports = BearbrickModel;
