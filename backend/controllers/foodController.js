import foodModel from '../models/foodModel.js';
import fs from 'fs';


// Add food item.
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        await food.save();
        res.json({"success": true, message: "Food added successfully"})
    } catch (error) {
        console.log(error)
        res.json({"success": false, message: "Error when trying to add Food"})
    }
}

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data: foods})
    } catch (error) {
        console.log(error)
        res.json({"success": false, message: "Error when trying fetch Foods"})
    }
}

// Remove food item.
const removeFood = async (req, res)=> {
    try{
        // Find the instance by id for unlinking the image.
        const food = await foodModel.findById(req.body.id)

        // Delete image from the uploads folder.
        fs.unlink(`uploads/${food.image}`, ()=>{});

        // Delete instance in the database.
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food removed successfully" })
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Unable to delete the food instance"})
    }
}


export { addFood, listFood, removeFood }