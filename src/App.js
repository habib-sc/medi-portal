import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Pages/Admin/Admin';
import AddAdmin from './components/Pages/Dashboard/AddAdmin/AddAdmin';
import AddDoctor from './components/Pages/Dashboard/AddDoctor/AddDoctor';
import AddPatient from './components/Pages/Dashboard/AddPatient/AddPatient';
import AddStaff from './components/Pages/Dashboard/AddStaff/AddStaff';
import Admins from './components/Pages/Dashboard/Admins/Admins';
import Doctors from './components/Pages/Dashboard/Doctors/Doctors';
import Patients from './components/Pages/Dashboard/Patients/Patients';
import Staffs from './components/Pages/Dashboard/Staffs/Staffs';
import Doctor from './components/Pages/Doctor/Doctor';
import Login from './components/Pages/Login/Login';
import Staff from './components/Pages/Staff/Staff';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>

        <Route path='/dashboard/admin' element={<Admin></Admin>}>
          <Route index element={<Doctors></Doctors>}></Route>
          <Route path='/dashboard/admin/doctors' element={<Doctors></Doctors>}></Route>
          <Route path='/dashboard/admin/staffs' element={<Staffs></Staffs>}></Route>
          <Route path='/dashboard/admin/admins' element={<Admins></Admins>}></Route>
          <Route path='/dashboard/admin/add-staff' element={<AddStaff></AddStaff>}></Route>
          <Route path='/dashboard/admin/add-doctor' element={<AddDoctor></AddDoctor>}></Route>
          <Route path='/dashboard/admin/add-admin' element={<AddAdmin></AddAdmin>}></Route>
        </Route>


        <Route path='/dashboard/doctor' element={<Doctor></Doctor>}>
          <Route index element={<Patients></Patients>}></Route>
          <Route path='/dashboard/doctor/patients' element={<Patients></Patients>}></Route>
        </Route>


        <Route path='/dashboard/staff' element={<Staff></Staff>}>
          <Route index element={<Patients></Patients>}></Route>
          <Route path='/dashboard/staff/patients' element={<Patients></Patients>}></Route>
          <Route path='/dashboard/staff/add-patient' element={<AddPatient></AddPatient>}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
