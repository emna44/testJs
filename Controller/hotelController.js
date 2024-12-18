
var express = require('express')
var router = express.Router()
const { create, list, deleteHotel, updateHotel, searchhotels } = require('../Service/hotelService')
var validate = require('../middleware/validation')


router.get('/hotels', list);
router.post('/createHotel', create);
router.delete('/deleteHotel/:id', deleteHotel);
router.put('/updateHotel/:id', updateHotel); 
router.put('/searchhotels', searchhotels); 

module.exports = router