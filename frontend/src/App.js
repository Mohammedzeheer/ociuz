import React from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeRegister from './components/Register/EmployeeRegister';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

const App = () => {

  return (
 
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<EmployeeList/>}> </Route>
        <Route  path='/Register' element={<EmployeeRegister/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

