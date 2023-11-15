import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";


const PORT = 5555;//port number
const app = express();
app.use(express.json()) //midleware for parsing request body
const mongdbUrl = 'mongodb+srv://Dragzter:siam1234@cluster0.srq1x8c.mongodb.net/?retryWrites=true&w=majority'; //server string

//homepage and message
app.get('/', (request, response) => {
  console.log(request);
  response.status(234).send("Hey")
  })   

 app.use("/users", userRoutes) 

//connecting database server
mongoose.connect(mongdbUrl)
        .then(() => {
            console.log("Connected to database");
            app.listen(PORT, () => {
                console.log(`App listening on port ${PORT}`);
            });  
        })
        .catch(() => {
            console.log(error);
        })