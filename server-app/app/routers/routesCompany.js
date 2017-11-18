var express = require('express');
var router = express.Router();
companController=require('../controllers/companyController');
router.post('/',companyController.createCompan);
router.get('/',companyController.getCompany);
router.get('/:id',companyController.getOne);
router.put('/:id',companyController.updateCompan);
router.delete('/:id',companyController.deleteCompan);
module.exports=router;