const testSchema = require('../model/testSchema');

function testControler() {
    
    function newTest(req, res){
        console.log("newTest() is up");
        console.log("req.body: " , req.body);
        var test = new testSchema(req.body);
        console.log("test: " ,test);
        test.save(function (err, newDoc) {
            console.log("newDoc: " ,newDoc);
            if (err) {
                console.log('err in sign in : ',err)
                return res.status(500).send({ msg: err })
            }
            console.log("create: newDoc: " + newDoc);        
            res.status(201).send(test);
        })
    }

    function getTest(req, res){
        console.log("getTest() is up");
        console.log("supervizor:" ,req.params.supervizor);
        testSchema.find({Supervisor:req.params.supervizor}, function(err, allTests){
            if (err) {

                return res.status(500).send({ "msg": "problem" });
            }
            if (!allTests) {
                return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
            }
        //    console.log("allTests: ",allTests);
            return res.status(200).send(allTests);
        })

        
    }
    

    function sendTest(req, res){
        console.log("sendTest() is up");
    }

    return{
            newTest : newTest,
            getTest : getTest,
            sendTest : sendTest

    }
}


module.exports = testControler();