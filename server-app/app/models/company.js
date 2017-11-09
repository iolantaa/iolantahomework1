let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let companySchema=new Schema({
    title:{type:String,required:true, minlength:10},
    description:{type:String,required:true, maxlength:1000},
    image:{type:String,required:true},
    image1:{type:String},
	website:{type:string, required:true, pattern:"https?://....(?:\.[a-z].)"}
	
});
module.exports=mongoose.model('company', companySchema);