const express = require('express');
const userControler = require('../controllers/userController');
//  /api/users
var userRoutes = express.Router();
userRoutes.get("/getAllUser" , userControler.getAllUser);
userRoutes.get("/getAllUserBySupervizor/:supervizor" , userControler.getAllUserBySupervizor);
userRoutes.get("/byName/:name" , userControler.getUserByName);
userRoutes.get("/byId/:idNumber" , userControler.getUserByIdNumber);

userRoutes.put("/Id/:_id" , userControler.updateUser);
userRoutes.delete("/:_id" , userControler.deleteUser);



module.exports = userRoutes;
