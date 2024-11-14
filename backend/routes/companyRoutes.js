const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// Route to fetch all companies
router.get('/', companyController.getAllCompanies);

// Route to fetch a specific company by ID
router.get('/:id', companyController.getCompanyById);

// Route to create a new company
router.post('/', companyController.createCompany);

// Optional: Route to update a company by ID
router.put('/:id', companyController.updateCompany);

// Optional: Route to delete a company by ID
router.delete('/:id', companyController.deleteCompany);

module.exports = router;