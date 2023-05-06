import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import './assets/yekanBakh/YekanBakh-Thin.ttf';
import './assets/yekanBakh/YekanBakh-Regular.ttf';
import './assets/yekanBakh/YekanBakh-Bold.ttf';
import './assets/yekanBakh/YekanBakh-Hairline.ttf';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/dashboard';
import HomeManage from './pages/HomeManage';
import AddNewHome from './pages/AddNewHome';
import HomeDetails from './pages/HomeDetails';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LoginForm/>} />
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='dashboard/homemanage' element={<HomeManage/>}/>
            <Route path='dashboard/HomeDetails' element={<HomeDetails/>}/>
            <Route path='dashboard/Add' element={<AddNewHome/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </>

)};

export default App
