let express=require('express');
let app=new express();
let port=8000;
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let stripe=require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');
let router = require('./app/routers/api.js');
mongoose.connect('mongodb://localhost/company');
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
	next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/app/v1',require('./app/routers/api.js'));
app.use(function(req,res){
	res.status(404).send({message:'Page not found'});
});

app.listen(port);
console.log('Server Restful API run in 8000 port');