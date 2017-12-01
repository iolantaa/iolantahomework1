let mongoose = require('mongoose');
var companDirectory = require('../models/company');
var Compan = mongoose.model('company'),bcrypt=require('bcryptjs');
exports.getCompany = function(req,res)
{
	Compan.find({},'title',function(err,company)
	{
		if(err)
			return res.send(err);
		res.json(company);
	});
};
exports.getOne = function(req,res){
	Compan.findOne(req.param.id,function(err,compan){
		if(!company){
			res.status(404).send({message:'Company not found'});
		} else{
			if(err)
				return res.send(err);
			res.json(compan);
		}
	});
};
exports.updateCompan=function(req,res){
	Compan.findOneAndUpdate({_id:req.params.id},req.body,function(err,compan){
		if(err)
			return res.status(400).send(err);
		res.json(compan);
	});
};
exports.deleteCompan=function(req,res){ Compan.remove({_id:req.params.id},function(err,compan)
{ if(err)
			return res.send(err);
		res.json({message:'Company has been successfully removed'});
	});
};
function cryptPass(password,callback){
	bcrypt.genSalt(10,function(err,salt){
		callback(err);
		bcryptCash(password,salt,function(err,pass){
			callback(err,pass);
		});
	});
};
exports.createCompan=function(req,res){
	if(!req.body) return res.sendStatus(400);
	var companData=req.body;
	var newCompan=new Compan(companData);
	newCompan.save(function(err,product){
		if(err)
			return res.send(err);
		res.send(compan);
	
});
};
// exports.createCompan=function(req,res){
// 	cryptPass(req.body.password,function(err,password){
// 		if(err) return req.send(err);
// 		var companData=req.body;
// 		companData.password=password;
// 		var newCompan=new Compan(companData);
// 		newCompan.save(function(err,compan)
// 		{
// 			if(err)
// 				return res.send(err);
// 			res.send(compan);
// 		});
// 	});
// };