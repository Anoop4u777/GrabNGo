import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import restaurantRouter from "./routes/restaurantRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'

// App configurations
const app = express()
const port = 4000

// middlewares.
app.use(express.json())
app.use(cors())


// Database connection
connectDB();

// Api endpoints
// Restaurant Model
app.use("/api/restaurant", restaurantRouter);


// Food model
app.use("/api/food", foodRouter);



// end point to get the images.
app.use("/images", express.static("uploads"))

// end point for users
app.use("/api/user", userRouter);

app.get("/", (req, res)=>{
    res.send("Hai API response")
})

app.listen(port, ()=>{
    console.log(`Server running in port http://localhost:${port}`)
})