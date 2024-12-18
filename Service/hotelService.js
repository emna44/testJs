const Hotel = require('../Model/hotelModel');

async function list(req, res, next) {
    try {
        const data = await Hotel.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(503).json(err);
    }
}

const create = async (req, res, next) => {
    try {
        const { name, fabricationDate, nbreRoom } = req.body;
        const hotel = new Hotel({ name, fabricationDate, nbreRoom });
        const data = await hotel.save();
        res.status(201).json({ message: "Hotel added successfully", data });
    } catch (err) {
        res.status(500).json({ error: "Unable to create hotel", details: err });
    }
};

async function updateHotel(req, res, next) {
    try {
        const data = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ error: "Hotel not found" });
        }
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

async function deleteHotel(req, res, next) {
    try {
        const data = await Hotel.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ error: "Hotel not found" });
        }
        res.status(200).json({ message: "Hotel deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
}

async function searchhotels(req, res, next) {
    await Hotels.find({ nbr_room: { $gte: 10, $lte: 100 } })
    .then((hotels) => {
        res.status(200).json(hotels); 

    })
    .catch((err) => {
        res.status(500).json(err)

    });
  }

module.exports = { create, list, updateHotel, deleteHotel, searchhotels };
