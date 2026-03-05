import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ShowAllEmployees } from './employeeservice'
import Home from './contents/Home'
import ShowEmployee from './contents/ShowEmployee'
import AddEmployee from './contents/AddEmployee'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <h1>Employee management App</h1>
      
      <Navbar/> <br />
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
       <Route path='/showall' element={<ShowEmployee/>}></Route>
        <Route path='/add' element={<AddEmployee/>}></Route>
        <Route path="/add/:id" element={<AddEmployee />} />
      </Routes>
    </>
  )
}

export default App
