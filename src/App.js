import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Pages/Admin/Admin';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
