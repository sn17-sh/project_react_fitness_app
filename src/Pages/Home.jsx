import React from 'react'
import {Box} from '@mui/material'
import MainBanner from '../Components/MainBanner'
import SearchBar from '../Components/SearchBar'
import ExercisesListing from '../Components/ExerciseListing'
import { useState } from 'react'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  
  return ( 
    <Box>
      <MainBanner/>
      <SearchBar 
      setExercises = {setExercises}
      bodyPart = {bodyPart}
      setBodyPart = {setBodyPart}  
       />
      <ExercisesListing
      setExercises = {setExercises}
      exercises = {exercises}
      bodyPart = {bodyPart}  
      />

    </Box>
  )
}

export default Home