var CompleteTestSchema = require('../model/CompleteTestSchema')


function CompleteTestControler() {

   function newCompleteTest(req ,res){
    console.log("newCompleteTest() is up");
    console.log("req.body: " , req.body);
    var CompleteTest =new CompleteTestSchema(req.body)
    CompleteTest.save(function (err, newDoc) {
                console.log("newDoc: " ,newDoc);
                if (err) {
                    console.log('err in sign in : ',err)
                    return res.status(500).send({ msg: err })
                }
                console.log("create: newDoc: " + newDoc);        
                res.status(201).send(CompleteTest);
            })
   }

   function getCompleteTest(req ,res){
    console.log("getCompleteTest() is up");


    }
    function deleteCompleteTest(req ,res){
        console.log("deleteCompleteTest() is up");


    }
    function testScore(req, res) {
        console.log('function get test Score: ',req.body);
        userSchema.find({ Supervisor: req.body.idNumber,profession: req.body.profession,userId: req.body.idNumber },  // {name:1, idNumber:1, Idpassport:1,email:1,img:1,  role:1 },  אם נרצה להחזיר רק את השדות האלו
             function (err, test) {

            if (err) {

                return res.status(500).send({ "msg": "problem" });
            }
            if (!test) {
                return res.status(404).send({ "msg": req.params.idNumber + " No test found" });
            }
            return res.status(200).send(test);
        })
        
    }
    
    // function newTest(req, res){
    //     console.log("newTest() is up");
    //     console.log("req.body: " , req.body);
    //     var test = new testSchema(req.body);
    //     console.log("test: " ,test);
    //     test.save(function (err, newDoc) {
    //         console.log("newDoc: " ,newDoc);
    //         if (err) {
    //             console.log('err in sign in : ',err)
    //             return res.status(500).send({ msg: err })
    //         }
    //         console.log("create: newDoc: " + newDoc);        
    //         res.status(201).send(test);
    //     })
    // }

    // function getTest(req, res){
    //     console.log("getTest() is up");
    //     console.log("supervizor:" ,req.params.supervizor);
    //     testSchema.find({Supervisor:req.params.supervizor}, function(err, allTests){
    //         if (err) {

    //             return res.status(500).send({ "msg": "problem" });
    //         }
    //         if (!allTests) {
    //             return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
    //         }
    //         console.log("allTests: ",allTests);
    //         return res.status(200).send(allTests);
    //     })

        
    // }

    // function sendTest(req, res){
    //     console.log("sendTest() is up");
    // }

    return{
            newCompleteTest : newCompleteTest,
            getCompleteTest : getCompleteTest,
            deleteCompleteTest : deleteCompleteTest,
            testScore : testScore

    }
}


module.exports = CompleteTestControler();