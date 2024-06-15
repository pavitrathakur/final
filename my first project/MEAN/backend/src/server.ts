import dotenv from 'dotenv';
dotenv.config();
process.env.MONGO_URL
import express from "express";
import cors from "cors";
import coffeRouter from './routers/coffe.router'
import userRouter from './routers/user.router'
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
dbConnect();

const app = express();

app.use(express.json());
app.use(cors({
  credentials:true,
  origin:["http://localhost:4200"]
}));

app.use("/api/drink" , coffeRouter);
app.use("/api/users" , userRouter);
app.use("/api/orders" , orderRouter);

const port=5000;
app.listen(port,()=>{
  console.log("website served on http://localhost:" + port );
})

