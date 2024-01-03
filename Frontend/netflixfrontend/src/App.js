import './App.css';
import Home from './Pages/Home/Home';
import './app.scss'
import Watch from './Pages/watch/Watch';
import Register from './Pages/register/Register';
import Login from './Pages/login/Login';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from './Context/authContext/AuthContext';
function App() {
  const {user}= useContext(AuthContext)
  //const user=;
  return (
    <>
    <BrowserRouter>
    <Routes>
    
    <Route exact path='/' element={user.accessToken ? <Home />: <Navigate to='/register'  />}/>
    <Route exact path='/movies' element={user.accessToken ? <Home type="movie"/>: <Navigate to='/register'  />}/>
    <Route exact path='/series' element={user.accessToken ? <Home type="series"/>: <Navigate to='/register'  />}/>
    <Route exact path='/watch' element={user.accessToken ? <Watch />: <Navigate to='/register'  />}/>
    <Route exact path='/register' element={!user.accessToken ? <Register /> : <Navigate to='/' />}/>
    <Route exact path='/login' element={!user.accessToken ? <Login />: <Navigate to='/' />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
