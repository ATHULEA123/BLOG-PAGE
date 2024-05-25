const express = require("express")
const connectDb = require("../Backend/Config/dbconnection")
const cors = require("cors")
const dotenv = require("dotenv").config()
const app = express()
connectDb();
app.use(express.json());
app.use(cors());
app.use("/api",require("./Router/Blogrouter"))
const port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})