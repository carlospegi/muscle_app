import React, { useState } from 'react'
import {Box} from '@mui/material'
import HeroBaner from '../components/HeroBaner'
import SearchExercice from '../components/SearchExercice'
import Exercises from '../components/Exercises'


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all'); // ..search
  const [exercises, setExercises] = useState([]); // ..search
  return (
    <Box>
      <HeroBaner />
      <SearchExercice setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home
