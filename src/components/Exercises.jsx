import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Stack, Box, Typography } from '@mui/material'
import { exercisesOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({ exercises, bodyPart, setExercises }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 6

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }

      setExercises(exercisesData);

    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage

  const indexOfFirstExercice = indexOfLastExercise - exercisesPerPage

  const currentExercises = exercises.slice(indexOfFirstExercice, indexOfLastExercise)
  //---------------------------------------------------------------------------------------

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: "smooth" })
  }



  return (
    <Box id="exercises"
      sx={{ mt: { lg: "109px" } }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "50px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {
          currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercises={exercise} />
          ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center" >
        {
          exercises.length > 9 && (
            <Pagination
              siblingCount={0}
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)} 
              page={currentPage}
              onChange={paginate}
             
              sx={{ size: {  lg:"large",  xs:"small"} }} 
            
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises
