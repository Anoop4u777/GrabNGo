import restaurantModel from '../models/restaurantModel.js'
import fs from 'fs';


// Add restaurant item.
const addRestaurant = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const restaurant = new restaurantModel({
        name: req.body.name,
        image: image_filename,
        description: req.body.description,
        category: req.body.category,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })

    try {
        await restaurant.save();
        res.json({"success": true, message: "Restaurant added successfully"})
    } catch (error) {
        console.log(error)
        res.json({"success": false, message: "Error when trying to add Restaurant"})
    }
}

export { addRestaurant }