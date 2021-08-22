const mongoose =require("mongoose");
const Schema = mongoose.Schema;


var userSchema = new Schema({
    name: { 
        type: String
       // required:true
    },
    idNumber: {
        type: String,
        required: true,
        unique:true
    },
    Idpassport: {
        type: String
    },
    phonNumber: {
        type: String
    },

    creation_date: {
        type: Date,
        default: Date.now() +(1000*60*60*3),
    },
    email: {
        type: String,
        //required: true,    //שדה חובה
       // unique:true        //מופע יחיד
    },
    password: {
        type: String
    },
    img: {
        type: String
    },
    role: {
        type: String,
        
    },
    roleNumber: {
        type: Number
    },
    
    age: {
        type: Number
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    graduation_year: {
        type: Number
    },
    academic_institution: {
        type: String
    },
    medical_institution: {
        type: String,
        default :' '
    },
    residency: {
        type: String
    },
    department: {
        type: String,
        default :' '
    },
    mySupervizor: {
        type: String

    },
   


});

module.exports = mongoose.model("user", userSchema);