import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Pages/Admin/Admin';
import Doctors from './components/Pages/Dashboard/Doctors/Doctors';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/dashboard/admin' element={<Admin></Admin>}>
          <Route path='/dashboard/admin/doctors' element={<Doctors></Doctors>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
