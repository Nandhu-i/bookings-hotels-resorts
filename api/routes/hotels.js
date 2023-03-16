import express  from "express";
import {
     createHotel, 
     updateHotel, 
     deleteHotel, 
     getHotel, 
     getHotels, 
     countByCity,
     countByType,
     getHotelRooms
    } from "../controllers/hotel.js"
    import { verifyAdmin } from "../utils/verifyToken.js";
// import Hotel from "../models/Hotel.js"


const router = express.Router();

// create
router.post('/', verifyAdmin, createHotel);


// update
router.put("/:id", verifyAdmin, updateHotel);


// delete
router.delete('/:id', verifyAdmin, deleteHotel);

// get
router.get('/find/:id', getHotel);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);
router.get('/room/:id', getHotelRooms);


// getall
router.get('/', getHotels);

export default router;