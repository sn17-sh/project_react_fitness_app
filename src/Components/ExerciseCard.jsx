import React from 'react'
import{Stack , Typography, Button} from '@mui/material' 
import { Link } from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'

const ExerciseCard = ({exercise}) => {
  return (
<Link to={`/exercise/${exercise.id}`} className='exercise-card'>
<LazyLoadImage
 src={exercise.gifUrl} alt="exercise-pic"/>

  <Stack direction={'row'}>
    <Button sx={{ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>{exercise.bodyPart}</Button>
    <Button sx={{ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>{exercise.target}</Button>
   
    
    
</Stack>
<Typography ml='21px' mt='11px' pb='10px' color='#000' fontWeight={'bold'} fontSize='24px' textTransform={'capitalize'}>{exercise.name}</Typography>
</Link>  
    )
}

export default ExerciseCard