const Employee = require('../models/employeeModel');

const createEmployee = async (req, res) => {
  try {
    console.log(`hello iam create`)
    console.log(req.body);
    const { name, email, phone, designation, address } = req.body;
    const employee = new Employee({
      name,
      email,
      phone,
      designation,
      address
    });
    await employee.save();
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json(error);
  }
};

const editEmployee = async (req, res) => {
  const id = req.params.id;
  const { name, email, phone, designation, address } = req.body;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, email, phone, designation, address },
      { new: true }
    );
    res.status(200).json({ message: `Employee modified with ID: ${id}` });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteEmployee = async (req, res) => {
  console.log(`delete` ,req.params.id)
  const id = req.params.id;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: `Employee deleted with ID: ${id}` });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports =
{
  createEmployee,
  getAllEmployees,
  editEmployee,
  deleteEmployee
}