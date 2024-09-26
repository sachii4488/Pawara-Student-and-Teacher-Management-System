const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const TimeTableSchema = new Schema({
    TimeTableID:{
        type:String,
        unique:true,
        required:true
    },

    ClassID:{
        type:String,
        required:true
    },
    
    DaysOfWeek:{
        type:String,
    },
    StartTime:{
        type:String,
    },
    EndTime:{
        type:String,
    },


});
module.export=mongoose.model('TimeTable',TimeTableSchema);