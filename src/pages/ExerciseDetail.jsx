import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, exercisesOptions, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import ExercisesVideos from '../components/ExercisesVideos'
import SimilarExercices from '../components/SimilarExercices'
import Detail from '../components/Detail'
const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState([]);  // x q array  y otro obj
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);



  const { id } = useParams()

  useEffect(() => {

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)
      setExerciseDetail(exerciseDetailData)

      const exercisesVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exercisesVideoData.contents)


      const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)

      setTargetMuscleExercises(targetMuscleExerciseData)


      const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)
      setEquipmentExercises(equipmentMuscleExerciseData)
    }


    fetchExercisesData()
  }, [id]);

  return (
    <Box>

      <Detail exerciseDetail={exerciseDetail} />
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercices targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />

    </Box>
  )
}

export default ExerciseDetail
