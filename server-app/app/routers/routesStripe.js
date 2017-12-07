var express = require('express');
var router = express.Router();
stripeController=require('../controllers/stripeController');
router.post('/',stripeController.payByStripe);
module.exports=router;