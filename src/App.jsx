import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from "./store/authSlice";
import {Header,Footer} from "./components";
import {Outlet} from "react-router-dom";
import './App.css'
import mainBg from './assets/bg-main.jpg';
function App() {
 

  const [loading ,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])



  return !loading ? (
    <div className="min-h-screen w-full flex flex-col"
     style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }} >
    <div className="flex-grow">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
  
  ):null;
   
}

export default App
