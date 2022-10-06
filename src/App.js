import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './pages/Home'
import ExerciceDetail from './pages/ExerciceDetail'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// 21 54


const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:"1400px"}}} m="auto">
    <Navbar />
    <Routes>
        <Route path="/" element={<Home  />} ></Route>
        <Route path="/exercise/:id" element={<ExerciceDetail  />} ></Route>
    </Routes>
   <Footer />
    </Box>
  )
}

export default App
