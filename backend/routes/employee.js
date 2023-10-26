const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.getAllEmployees);
router.put('/employees/:id', employeeController.editEmployee);
router.delete('/employees/:id', employeeController.deleteEmployee);

module.exports = router;
