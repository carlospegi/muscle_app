import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import HorizontalScrollData from './HorizontalScrollData'
import Loader from './Loader'

const SimilarExercices = ({ targetMuscleExercises, equipmentExercises }) => {

  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercices that target same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{ p: 2, position: "relative" }} >

        {targetMuscleExercises.length !== 0 ? <HorizontalScrollData data={targetMuscleExercises} /> :
          <Loader />}

      </Stack>
      <Typography variant="h3" mb={5}>
        Exercices that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{ p: 2, position: "relative" }} >

        {equipmentExercises.length !== 0 ? <HorizontalScrollData data={equipmentExercises} /> :
          <Loader />}

      </Stack>
    </Box>
  )
}

export default SimilarExercices
