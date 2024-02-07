import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import HouseComponent from './pages/HouseComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/loginUser' element={<LoginUser />} />
        <Route path='/registerUser' element={<RegisterUser />} />
        <Route path='/houseComponent' element={<HouseComponent />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
