var mongoose = require('mongoose')
const Schema  = mongoose.Schema

var Hotel = new Schema(
    {name:String,
        fabricationDate:Date,
        nbreRoom:Number
})
module.exports = mongoose.model('hotels', Hotel)