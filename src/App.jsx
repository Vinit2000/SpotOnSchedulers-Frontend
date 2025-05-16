import React from 'react'
import Home from './components/Home'
import MasterForm from './components/MasterForm'
import AddOffice from './components/AddOffice'
import {Routes, Route} from "react-router-dom";
import Sidebar from './components/Sidebars';

const App = () => {
  return (
    <div>
      {/* <Routes>
        <Route path='#' element ={<Home/>}/>
        <Route path='/mas' element ={<MasterForm/>}/>
        <Route path='#' element ={<AddOffice/>}/>     
      </Routes> */}
      <Sidebar/>
    </div>
  )
}

export default App