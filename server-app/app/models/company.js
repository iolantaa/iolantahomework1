let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let companySchema=new Schema({
    title:{type:String,required:title.length>10},
    description:{type:String,required:description.length<1000},
    image:{type:String,required},
    image1:{type:String,required},
	website:{type:string, required:}
	
});
module.exports=mongoose.model('company', companySchema);