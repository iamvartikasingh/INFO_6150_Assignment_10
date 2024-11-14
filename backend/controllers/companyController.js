const Company = require('../models/Company'); // Ensure you have a Company model defined


exports.createCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const company = await newCompany.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error: error.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: 'Error updating company', error: error.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error: error.message });
  }
};

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error: error.message });
  }
};


exports.getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company', error: error.message });
  }
};