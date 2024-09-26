const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const AnnouncementSchema = new Schema({
    AnnouncementID:{
        type:String,
        unique:true,
        required:true
    },
    AdminID:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    DatePosted:{
        type:Date,
        required:true
    },
    Content:{
       type:String, 
    }

});
module.export=mongoose.model('Announcement',AnnouncementSchemaSchema);