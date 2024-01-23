import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'

import './App.css'
import Auth from './Components/auth/Auth'

const App = () => {
  return (
    <div>
      <div className='col'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
