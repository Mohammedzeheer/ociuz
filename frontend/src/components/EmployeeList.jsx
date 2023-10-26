import React, { useState, useEffect } from 'react';
import { Axios } from '../api/axiosInstance';
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaSave } from "react-icons/fa";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);


  
  const editEmployee = (id) => {
    setEditingId(id);
  };

  const saveEmployee = async (id, updatedEmployee) => {
    try {
      await Axios.put(`employees/${id}`, updatedEmployee);
      setEditingId(null); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteEmployee = async (id) => {
    console.log(`Deleting employee with id ${id}`);
    try {
      await Axios.delete(`employees/${id}`);
      setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const addEmployee = ()=>{
     navigate('/Register')
  }

  return (
    <div className="overflow-x-auto m-5">
   <button className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addEmployee}>Add Employee</button>
      <h2 className="text-2xl mb-4">Employee List</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Designation</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
               <tbody>
          {employees.map(employee => (
            <tr key={employee._id}>

              <td className="py-2 px-4 border-b">
                {editingId === employee._id ? (
                  <input
                    type="text"
                    defaultValue={employee.name} 
                    onChange={(e) => {
                      const updatedEmployees = employees.map(emp =>
                        emp._id === employee._id
                          ? { ...emp, name: e.target.value }
                          : emp
                      );
                      setEmployees(updatedEmployees);
                    }}
                  />
                ) : (
                  employee.name
                )}
              </td>


              <td className="py-2 px-4 border-b">
                {editingId === employee._id ? (
                  <input type="text"  defaultValue={employee.email} 
                    onChange={(e) => {const updatedEmployees = employees.map(emp => emp._id === employee._id ? { ...emp, email: e.target.value } : emp );
                      setEmployees(updatedEmployees);
                    }}
                  />
                ) : (
                  employee.email
                )}
              </td>

              <td className="py-2 px-4 border-b">
                {editingId === employee._id ? (
                  <input type="text"  defaultValue={employee.phone} 
                    onChange={(e) => {const updatedEmployees = employees.map(emp => emp._id === employee._id ? { ...emp, phone: e.target.value } : emp );
                      setEmployees(updatedEmployees);
                    }}
                  />
                ) : (
                  employee.phone
                )}
              </td>

              <td className="py-2 px-4 border-b">
                {editingId === employee._id ? (
                  <input type="text"  defaultValue={employee.designation} 
                    onChange={(e) => {const updatedEmployees = employees.map(emp => emp._id === employee._id ? { ...emp, designation: e.target.value } : emp );
                      setEmployees(updatedEmployees);
                    }}
                  />
                ) : (
                  employee.designation
                )}
              </td>


              <td className="py-2 px-4 border-b">
                {editingId === employee._id ? (
                  <input type="text"  defaultValue={employee.address} 
                    onChange={(e) => {const updatedEmployees = employees.map(emp => emp._id === employee._id ? { ...emp, address: e.target.value } : emp );
                      setEmployees(updatedEmployees);
                    }}
                  />
                ) : (
                  employee.address
                )}
              </td>


              <td className="py-2 px-4 border-b">
                {editingId === employee._id ? (
                  <button
                    onClick={() => saveEmployee(employee._id, employee)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    <FaSave/>
                  </button>
                ) : (
                  <button
                    onClick={() => editEmployee(employee._id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    <AiFillEdit/>
                  </button>
                )}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteEmployee(employee._id)}
                >
                 <MdDelete/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;



