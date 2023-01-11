import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHome from './components/adminHome';
import UserPortal from './components/userPortal';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/>
        <Route path='/user/*' element={<UserPortal/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
//whenever we are not aware of what is coming '*' is given
