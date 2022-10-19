import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import HorizontalScrollbar from '../Components/HorizontalScrollbar'
import {Loader} from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' m='20px 0 40px 40px'>Exercise that target the same <span style={{color:'#FF2625', textTransform:'capitalize'}}>muscle group</span></Typography>
      
      <Stack direction={'row'} sx={{p: '2', position : 'relative'}}>
           {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>: <Loader/>}       
        </Stack>


        <Typography variant='h3' m= '100px 0 60px 40px' >Similar <span style={{color:'#FF2625', textTransform:'capitalize'}}>equipment</span> exercise</Typography>
        <Stack direction={'row'} sx={{p: '2', position : 'relative'}}>
           {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>: <Loader/>}       
        </Stack>
      
    </Box>
  )
}

export default SimilarExercises