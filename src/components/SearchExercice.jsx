import React, { useEffect, useState } from 'react'

import { Stack, Box, TextField, Typography, Button } from '@mui/material'
import { fetchData, exercisesOptions } from '../utils/fetchData'
import HorizontalScrollData from './HorizontalScrollData';

const SearchExercice = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('');

    const [bodyParts, setBodyParts] = useState([]);



    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions) // url completa
            setBodyParts(["all", ...bodyPartData]) // lista nombres 


        }
        fetchExerciseData()

    }, []);

    const handleSearch = async () => {
        if (search) {

            const exercicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
            const searchExercicesData = exercicesData.filter(exercise => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('')
            setExercises(searchExercicesData)
        }

    }
    return (
        <Stack
            alignItems="center" mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Typography
                fontWeight="700"
                sx={{
                    fontSize: { lg: "44px", xs: "30px" }
                }}
            >
                Awesome Exercices You <br /> Should Know
            </Typography>
            <Box position="relative">
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px"
                        },
                        width: { lg: "800px", xs: "350px" },  // revisar width.  se salia
                        backgroundColor: "#fff",
                        borderRadius: "4px"
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercice"
                    type="text"
                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: "#FF2625",
                        color: "fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        position: "absolute",
                        right: "0"  // opcional x
                    }}
                    onClick={handleSearch}
                >
                    Search

                </Button>

            </Box>
            <Box sx={{
                position: "relative", width: "100%", p: "20px"
            }}>
                <HorizontalScrollData data={bodyParts} bodyParts bodyPart={bodyPart} setBodyPart={setBodyPart} ></HorizontalScrollData>
            </Box>
        </Stack>
    )
}

export default SearchExercice
