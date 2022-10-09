import React, { useState } from 'react'

import HeroBaner from '../components/HeroBaner'
import SearchExercice from '../components/SearchExercice'
import Exercises from '../components/Exercises'


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all'); // ..search
  const [exercises, setExercises] = useState([]); // ..search
  return (
    <div>
      <HeroBaner />
      <SearchExercice setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </div>
  )
}

export default Home
