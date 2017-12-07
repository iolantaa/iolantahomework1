let mongoose = require('mongoose');
var companyDirectory = require('../models/company');
var Company = mongoose.model('company'),bcrypt=require('bcryptjs');
exports.getCompanys = function(req,res)
{
	Company.find({},function(err,companys)
	{
		if(err)
			return res.send(err);
		res.json(companys);
	});
};
exports.getOne = function(req,res){
	Company.findOne(req.param.id,function(err,company){
		if(!company){
			res.status(404).send({message:'Company not found'});
		} else{
			if(err)
				return res.send(err);
			res.json(company);
		}
	});
};
exports.updateCompany=function(req,res){
	Company.findOneAndUpdate({_id:req.params.id},req.body,function(err,company){
		if(err)
			return res.status(400).send(err);
		res.json(company);
	});
};
exports.deleteCompany=function(req,res){ Company.remove({_id:req.params.id},function(err,company)
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
exports.createCompany=function(req,res){
	if(!req.body) return res.sendStatus(400);
	var companyData=req.body;
	var newCompany=new Company(companyData);
	newCompany.save(function(err,company){
		if(err)
			return res.send(err);
		res.send(company);
	
});
};
exports.createCompan=function(req,res){
	
		
		var companData=req.body;
	
		var newCompany=new Company(companData);
		newCompany.save(function(err,compan)
		{
			if(err)
 				return res.send(err);
 			res.send(compan);

 	});
 };