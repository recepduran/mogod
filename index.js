
const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const { User } = require("./model.js");
const router = express.Router();
var uri = "mongodb+srv://mogodeneme:mogodeneme@cluster0.1z9ayxv.mongodb.net/sample_geospatial?retryWrites=true&w=majority"


mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use(express.json())
app.use(bodyparser.json())
app.use("/f", router);
router.get('/', (req,res)=>{
    User.find({}).then(data => {
                res.send(data)
               // console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
})


app.listen(3000, () => {
  


  console.log('server started');
});








