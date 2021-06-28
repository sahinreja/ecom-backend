const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const addressSchema = new Schema({
    user_id:String,
    name:String,
    phone:Number,
    address:String,
    country:String,
    state:String,
    pincode:Number
})

module.exports = mongoose.model('add' , addressSchema , 'address')