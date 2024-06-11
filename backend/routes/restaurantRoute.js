import express from "express";
import { addRestaurant } from "../controllers/restaurantController.js";
import multer from "multer";


const restaurantRouter = express.Router();

// Image storage engine.

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

// Other routes
restaurantRouter.post("/add", upload.single("image"), addRestaurant);




export default restaurantRouter;