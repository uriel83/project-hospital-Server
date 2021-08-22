const express = require('express');

const userControler = require('../controllers/userController');
//  /api/users
var loginRoutes = express.Router();

loginRoutes.post("/id" , userControler.loginByIdNumber);
loginRoutes.post("/email" ,userControler.loginByEmail);
loginRoutes.post("/create" , userControler.create);
loginRoutes.get("/getAllSupervizor" , userControler.getAllSupervizor);


module.exports = loginRoutes;
