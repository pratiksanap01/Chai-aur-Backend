import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();


console.log("MONGO_URI:", process.env.MONGODB_URI);
console.log("PORT:", process.env.PORT);

const app = express();

connectDB()

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))