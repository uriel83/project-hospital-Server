const userSchema = require("../model/userSchema");
const crypto = require("../utils/encrypyUtill");
const userToken = require("../model/userToken")

function userControler() {

    function create(req, res) {
        console.log("function create is up");
        if (!req.body.name) {
            return res.status(400).send({ msg: 'this msg' });
        }

        var user = new userSchema(req.body)
        console.log("user: ", user);
         user.password=crypto.cryptPassword(user.password) //מחליף את הסיסמה לסיסמה מוצפנת
        console.log("user: " + user);
        user.save(function (err, newDoc) {
            if (err) {
                console.log('err in sign in : ',err)
                return res.status(500).send({ msg: err })
            }
            console.log("create: newDoc: " + newDoc);
            console.log("create: user: "+user);
           
           var token = new userToken(true, null,user.name, user._id, user.role, user.roleNumber, user.email)
            console.log("create: token: "+ token.token);
            token = token.token;


            res.status(201).send({user, token});
        })



    }
    function deleteUser(req, res) {
        userSchema.deleteOne({ _id: req.params._id }, function (err, result) {
            if (err) {
                return res.status(500).send();
            }
            if (!result.n) {
                return res.status(404).send();
            }
            res.status(200).send();
        })

    }
    function updateUser(req, res) {
        console.log("updateUser: " ,req.body);
        userSchema.updateOne({ idNumber: req.body.idNumber }, { $set:  req.body }, function (err, result) {

          
            console.log(result);
            
            return res.send({ err: err, result: result })

        })

    }
    function getUserByName(req, res) {
        console.log('function get By Name');
        userSchema.find({ name: req.params.name }, function (err, list) {
            if (err) {

                return res.status(500).send({ "msg": "problem" });
            }
            if (!list) {
                return res.status(404).send({ "msg": req.params.name + " No user found" });
            }
            return res.status(200).send(list);
        })
    }

    function getUserByIdNumber(req, res) {
        console.log('function get User By IdNumber');
        userSchema.find({ idNumber: req.params.idNumber },  // {name:1, idNumber:1, Idpassport:1,email:1,img:1,  role:1 },  אם נרצה להחזיר רק את השדות האלו
             function (err, user) {

            if (err) {

                return res.status(500).send({ "msg": "problem" });
            }
            if (!user) {
                return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
            }
            return res.status(200).send(user);
        })
    }
    function getAllSupervizor(req, res) {
        console.log('function get All Supervizor');
        userSchema.find({role: "supervisor"  },   {name:1,  medical_institution:1, department:1, img:1 },  
             function (err, listSupervizor) {

            if (err) {

                return res.status(500).send({ "msg": "problem" });
            }
            if (!listSupervizor) {
                return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
            }
            console.log(listSupervizor);
            return res.status(200).send(listSupervizor);
        })
    }

    function getAllUser(req, res) {
        console.log('function all users');
        userSchema.find(function (err, list) {

            if (err) {
                return res.status(500).send({});
            }
            return res.status(200).send(list);
        })
    }
    function getAllUserBySupervizor(req, res) {
        console.log('function get  User By Supervizor');
        userSchema.find({mySupervizor : req.params.supervizor }, function (err, list) {
            if (err) {

                return res.status(500).send({ "msg": "problem" });
            }
            if (!list) {
                return res.status(404).send({ "msg": req.params.supervizor + " No user found" });
            }
            return res.status(200).send(list);
        })
        
    }
    function loginByIdNumber(req, res) {
        console.log(req.body);

        userSchema.findOne({ idNumber: req.body.idNumber }, function (err, user) {
            console.log("find by id");
            console.log("user: "+ user);
            if (err) {
                console.log("err 500");
                return res.status(500).send({ "msg": "problem" });
            }
            
            if (!user ) {
                console.log("err 404");
                return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
            }
            if ( !crypto.compare(req.body.password, user.password)) {
                console.log("err 404");
                return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
            }
            
            console.log("findOne: user: "+user);

            var token = new userToken(true, null,user.name, user._id, user.role, user.roleNumber, user.email)
            console.log("findOne: token: "+ token.token);
            token = token.token;
            return res.status(200).send({ user, token });
        })
    }
    function loginByEmail(req, res) {
        console.log(req.body);
        userSchema.find({ email: req.body.email, password: req.body.password }, function (err, user) {
            console.log("find by email");
            if (err) {
                console.log("err 500");
                return res.status(500).send({ "msg": "problem" });
            }
            if (!user && !crypto.compare(req.body.password, user.password)) {
                console.log("err 404");
                return res.status(404).send({ "msg": req.params.idNumber + " No user found" });
            }
            console.log(user);
            var token = new Token(true, null,user.name, user._id, user.role, user.roleNumber, user.email)
            console.log("token: ", token);
            return res.status(200).send({ user, token });
        })
    }
    

    return {
        getUserByIdNumber: getUserByIdNumber,
        getUserByName: getUserByName,
        updateUser: updateUser,
        create: create,
        deleteUser: deleteUser,
        getAllUser: getAllUser,
        loginByIdNumber: loginByIdNumber,
        loginByEmail: loginByEmail,
        getAllSupervizor:getAllSupervizor,
        getAllUserBySupervizor:getAllUserBySupervizor

    }
}
module.exports = userControler();