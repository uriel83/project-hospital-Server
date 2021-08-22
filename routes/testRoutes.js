const express = require('express');
const testControler = require('../controllers/testcontrollers');
const completeTestControler = require('../controllers/CompleteTestControllers')
//  /api/users
var testRoutes = express.Router();
testRoutes.post("/newTest", testControler.newTest);
testRoutes.get("/testScore", completeTestControler.testScore);
testRoutes.get("/getTest/:supervizor", testControler.getTest);
testRoutes.post("/sendTest", testControler.sendTest)
testRoutes.post("/CompleteTest", completeTestControler.newCompleteTest);

module.exports = testRoutes;