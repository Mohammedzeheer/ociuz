import React from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import EmployeeRegister from './components/Register/EmployeeRegister';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

const App = () => {

  return (
    // <div>
    //   <EmployeeRegister/>
    //   {/* <EmployeeForm addEmployee={addEmployee} /> */}
    //   {/* <EmployeeList employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} /> */}
    //   <EmployeeList/>
    // </div>

    
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<EmployeeList/>}> </Route>
        <Route  path='/Register' element={<EmployeeRegister/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

