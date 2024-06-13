const express = require("express");
const mongoose = require("mongoose");

const blogPostingRouter=require('./app/modules/blogpost/blogpost.route')

require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

const uri = process.env.MONGO_URI;

mongoose.Promise = global.Promise;
mongoose
  .connect(uri)
  .then(() =>{ 
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));


app.use('/blogpost',blogPostingRouter)

  app.get('/', (req, res) => {
    res.send('Running inventory management');
  });
  
  app.listen(port, () => {
    console.log(`app litstening at port ${port}`);
  });