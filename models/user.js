const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    email:String,
    gender:String,
    phone:Number,
    password:String,
    image:String
})

module.exports = mongoose.model('user' , userSchema , 'users');