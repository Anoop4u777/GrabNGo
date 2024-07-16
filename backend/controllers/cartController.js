import userModel from "../models/userModel.js";


// Add item to the user respective cart.
const addToCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({succes:true, message: "Item Added to cart"})
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Unable to add to cart"})
    }
}


// Remove item from the user respective cart
const removeFromCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({succes:true, message: "Item removed from cart"})
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Unable to remove item from cart"})
    }
}

// fetch cart instances with respect to user.
const getCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success: true, cartData})
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Unable to items from the cart"})
    }
}

export {addToCart, removeFromCart, getCart}