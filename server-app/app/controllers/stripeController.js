var stripe=require('stripe')('sk_test_0ZVwg3fH75l5A5Hyh8XfLfbU');

exports.payByStripe=(req,res)=>{
stripe.customers.create({
	email:req.body.email,
}).then((customer)=>{
	return stripe.customers.createSource(customer.id,{
		source:{
		object:"card",
		exp_month:req.body.month,
		exp_year:req.body.year,
		number:req.body.number,
		cvc:req.body.cvc
	}
	});
	console.log(customer);
}).then((source)=>{
	return stripe.charges.create({
		amount:req.body.amount*100,
		currency:'usd',
		customer:source.customer
	});
}).then((charge)=>{
	res.json({message:"Yes"});
}).catch((err)=>{res.send(err);});
}