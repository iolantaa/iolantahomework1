var express = require('express');
var router = express.Router();
router.use('/company',require('./routesCompany.js'));
router.use('/stripe',require('./routesStripe.js'));
module.exports=router;
