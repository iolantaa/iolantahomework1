let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let companySchema=new Schema({
    title:{type:String,required:true, minlength:10},
    description:{type:String,required:true, maxlength:1000},
    image:{type:String, required:true},
    image1:{type:String, default:''},
    website:{type:String, required:true, pattern:"https?://....(?:\.[a-z].)"},
    create:{type:Date, required:true },
    country:{type:String,required:true},
    emplo:{type:Number,default:0},
    seo:{type:String,required:true,minLength:5},
    city:{type:String,default:''},
    address:{type:String,required:true},
    card_number:{type:Number,required:true,minLength:16,maxLength:16},
	card_month:{type:Number,required:true, min:0,max:12},
	card_year:{type:Number,required:true,min:2017 ,max:2026},
	card_cvc:{type:Number,required:true,minLength:3,maxLength:3},
	create_at:{type:Date,default:Date.Now}
    
	
});
module.exports=mongoose.model('company', companySchema);