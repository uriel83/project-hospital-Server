const mongoose =require("mongoose");
const Schema = mongoose.Schema;


var CompleteTestSchema = new Schema({
    Supervisor: {    
        type: String
       
    },
    profession: {    //מקצוע
        type: String
     
    },
    urlCompleteTest: {
        type: String
     
    },
    userId: {
        type:String
        
    },
    score: {
        type: Number
        
    },
    remarks: {
        type:String
        
    },
    StartTime: {
        type:String
        
    },
    endTime: {
        type:String
        
    }

    
   
   


});

module.exports = mongoose.model("CompleteTest", CompleteTestSchema);