const express = require("express");
const cors =require("cors")


const mainRouter = require("./routes/index");
const bodyParser = require("body-parser");
const app =express();


app.use(bodyParser.json())
app.use(cors())
app.use(express.json());
app.use("/api/vi",mainRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
