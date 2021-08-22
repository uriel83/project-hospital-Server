const port = process.env.PORT || 5000;
const express = require('express');
var app = express();
var bosyParser = require('body-parser');
const UserToken = require("./model/userToken");


var mongoose = require('mongoose');
const dbpath = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/HospitalDatabace";
mongoose.connect(dbpath);
mongoose.connection.on("error", function(){});


app.use(require("cors")());
app.use(express.json())

// app.use("/api", function(req, res, next){
//     console.log(req.headers);
//     var userToken = new UserToken (false, req.headers['authorization']);
//     if (userToken.isNotExpired()){
//         req.user = userToken;
//         return next()
//     }
//     else{
//         return res.status(401).send();
//     }

// })
//Routes
app.use("/api/users", require('./routes/userRoutes'));
app.use("/login", require('./routes/loginRoutes'));
app.use("/api/tests",require('./routes/testRoutes'));


app.listen(port , function(){
    console.log("server is up in port: " + port);
});

