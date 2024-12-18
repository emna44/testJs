var express = require('express')
var hotelRouter = require('./Controller/hotelController')
var app= express()
var mongoose = require('mongoose')
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/hotel-db')
.then(()=>{
    console.log("DB connected!");

})
.catch((error)=>{
    console.log("error :" + error);

}) 
app.use('/hotels', hotelRouter)
var http = require('http')
var server = http.createServer(app)
server.listen(3001,()=>{
    console.log('server started !');
})