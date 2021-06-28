const mongoose = require('mongoose');

const Schema  = mongoose.Schema;
const productsSchema = new Schema({
    user_id:String,
    products: [
        {
            id:Number,
            inCart:Number,
            category:String,
            title:String,
            price:Number,
            image:String,
            description:String
        }
    ],
    totalCost:Number,
    totalProductNumber:Number
})

module.exports = mongoose.model('product' , productsSchema , 'products');