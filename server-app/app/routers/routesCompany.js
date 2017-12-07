var express = require('express');
var router = express.Router();
companyController=require('../controllers/companyController');
router.post('/',companyController.createCompan);
router.get('/',companyController.getCompanys);
router.get('/:id',companyController.getOne);
router.put('/:id',companyController.updateCompany);
router.delete('/:id',companyController.deleteCompany);
module.exports=router;