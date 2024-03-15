import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'reset-css';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';


import Login from '@screens/Login'
import ResetPassword from '@screens/ResetPassword'
import ForgotPassword from '@screens/ForgotPassword'

import UserContext from "@contexts/userContext"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword/>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>,
  }
]);

const App = () => {
  const [user, setUser] = useState(null)
  
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
      <ToastContainer/>
    </UserContext.Provider>
    </>
    
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
