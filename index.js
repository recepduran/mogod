
const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
var cors = require('cors')
const app = express();

const { User } = require("./model.js");
const router = express.Router();


const mySecret = process.env['DB_CONNECT']

 var corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}


mongoose.connect(mySecret, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use(express.json())
app.use(bodyparser.json())
app.use("/", router);

router.get('/', (req,res)=>{
    User.find({}).then(data => {
                res.json(data)
               // console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
})


app.listen(process.env.PORT, () => {

  console.log('server started');
});








