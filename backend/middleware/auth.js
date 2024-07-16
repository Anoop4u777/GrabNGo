import jwt from "jsonwebtoken";

const authMiddleware = async(req, res, next) => {
    const {token} = req.headers;
    if (!token){
        return res.json({success: false, message: "Not authorised login again!!!"})
    } 
    try {
        const toke_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = toke_decode.id;
        next();
    } catch (error) {
        console.log(error)
        return res.json({success: false, message: "Error"})
    }
}

export default authMiddleware