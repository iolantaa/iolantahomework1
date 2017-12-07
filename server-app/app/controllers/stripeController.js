var stripe=require('stripe')('sk_test_0ZVwg3fH75l5A5Hyh8XfLfbU');

exports.payByStripe=(req,res)=>{
stripe.customers.create({
	email:req.body.email,
}).then((customer)=>{
	return stripe.customer.createSource(customer.id,{
		source:{
		object:"card",
		exs_month:req.body.month,
		exp_year:req.body.year,
		number:req.body.number,
		code:req.body.code
	}
	});
}).then((source)=>{
	return stripe.charges.create({
		amount:req.body.amount*100,
		curency:'usd',
		customer:source.customer
	});
}).then((charge)=>{
	res.json({message:"Yes"});
}).catch((err)=>{res.send(err);});
}