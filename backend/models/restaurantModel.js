import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    location: {type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
})

const restaurantModel = mongoose.model.restaurant || mongoose.model("restaurant", restaurantSchema);

export default restaurantModel;