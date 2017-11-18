var express = require('express');
var router = express.Router();
router.use('/company',require('./routesCompany.js'));
module.exports=router;