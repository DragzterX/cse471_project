import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';
import DeleteUser from './pages/DeleteUser';
import Signup from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users/create' element={<CreateUser/>} />
      <Route path='/users/edit/:id' element={<EditUser/>} />
      <Route path='/users/delete/:id' element={<DeleteUser/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />

    </Routes>
  )
}

export default App