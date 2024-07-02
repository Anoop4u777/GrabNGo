import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}
// Function to login a user
const loginUser = async (req, res) => {
     const {email, password} = req.body;

     try{

        // Check if user exists in DB
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid password"});
        }

        const token = createToken(user._id);
        res.json({ success: true, token });

     }catch (error) {
            console.log(error);
            res.json({ success: false, message: "Error" });
     }
    
}
// Function to register a user
const registerUser = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        // Check if user email exists in DB
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        // Email validation
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email" });
        }
        // Password validation
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters" });
        }

        // Password bcrypt hashing > creating a new user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error"})
    }
    
}

export { loginUser, registerUser };