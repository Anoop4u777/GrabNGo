import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://grabngo:grabngo123@cluster0.suy4tvn.mongodb.net/grab-n-go').then(() => console.log('Database connected successfully'));
}