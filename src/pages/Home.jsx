import React from 'react'
import { Box } from '@mui/material'
import HeroBaner from '../components/HeroBaner'
import SearchExercice from '../components/SearchExercice'
import Exercises from '../components/Exercises'


const Home = () => {
  return (
    <div>
   <HeroBaner />
   <SearchExercice />
   <Exercises />
    </div>
  )
}

export default Home
