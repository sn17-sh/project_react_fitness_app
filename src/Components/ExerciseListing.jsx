import React, {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Pagination from '@mui/material/Pagination'
import ExerciseCard from './ExerciseCard'
import {fetchData, options} from '../Utils/fetchData'
import { Loader } from './Loader'


const ExerciseListing = ({bodyPart,setExercises, exercises }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize]=useState(6);
 
//categery vise search bodyPart
  useEffect(() => {

    const fetchExerciseData = async()=>{
    let exerciseData = [];
  
    if(bodyPart==="all"){
      exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", options);
    } else{
  
      exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);

    }
    setExercises(exerciseData);
  }
    fetchExerciseData();
  }, [bodyPart]);
  

  // Pagination
 
 const indexOfLastExercise = currentPage * pageSize;
 const indexOfFirstExercise = indexOfLastExercise - pageSize;
 const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

 const paginate =(e, value)=> {
  setCurrentPage(value);
  window.scrollTo({ top: 1800, behavior: 'smooth'})
}

if(!currentExercises.length) return <Loader/>;

  return (
    <Box id='exercises'
    sx={{mt:{lg: '110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant= 'h3' mb="46px">Showing Results</Typography>
   <Stack direction="row" justifyContent={'center'} flexWrap={'wrap'} sx={{gap: {lg : '110px', xs: '50px'}}}>
    {
      currentExercises.map((exercise, index)=> (
        <ExerciseCard key={index} exercise={exercise}/>
      ))
    }
   </Stack>

  <Stack mt="100px" alignItems="center">
    {
      exercises.length >9 && (
        <Pagination
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length/ pageSize)}
        page={currentPage}
        onChange={paginate}
        size="large"
        />
      )
    }


  </Stack>

    </Box>
    
  )
}

export default ExerciseListing