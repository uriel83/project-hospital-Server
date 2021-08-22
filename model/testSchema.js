const mongoose =require("mongoose");
const Schema = mongoose.Schema;


var testSchema = new Schema({
    Supervisor: {    
        type: String
       
    },
    profession: {    //מקצוע
        type: String
     
    },
    urlTest: {
        type: String
     
    },
    usersId: {
        type: [String]
        
    },
   
   


});

module.exports = mongoose.model("test", testSchema);