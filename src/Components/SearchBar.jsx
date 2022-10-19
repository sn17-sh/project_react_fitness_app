import React from 'react'
import {Box, TextField, Stack, Typography, Button} from '@mui/material'
import {useState, useEffect} from 'react'
import {options, fetchData} from '../Utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchBar = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  
  useEffect(() => {
        const fetchExerciseData = async () => {
           const bodyPartData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", options);
           
           setBodyParts(['all', ...bodyPartData]);
        }
  
        fetchExerciseData();
  }, [])
  

  const handleSearch = async()=>{
     if(search){
         const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",options);

         const searchInput = exercisesData.filter((exercise) => { 
          return (

          exercise.name.toLowerCase().includes(search) || 
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        
               
     )});
            
     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
         setSearch("");
         setExercises(searchInput);
    }
  }

  

  

  return (
    <Stack alignItems={'center'} justifyContent={'center'} padding={'20px'}>
      <Typography fontWeight={700}
      sx={{
        fontSize:{lg:'44px', sm:'36px', xs:'30px'}
      }} mb ='50px' textAlign = "center">
      Awesome Exercises You <br/>
      Should Know
      </Typography>

      

      <Box position='relative' mb='72px'>

        <TextField
        sx ={{
          input: {
            fontWeight: '700',
            border: 'none', borderRadius: '4px'
          },
          width:{lg: '1170px', xs: '350px'},
          backgroundColor: '#fff',
          borderRadius:'40px'
        }}
        height='72px'
        value={search}
        onChange={(e)=>{(setSearch(e.target.value.toLocaleLowerCase()))}}
        placeholder="Search Exercises"
        type='text'

        />
        <Button className= 'search-btn'
        sx={{
          backgroundColor:'#FF2625',
          color: '#fff',
          height: '56px',
          width:{ lg: '175px', xs: '80px'},
          fontSize: { lg: '20px', xs: '14px'},
          position: 'absolute',
          right:'0'
        }}
        ml='5px'
        onClick={handleSearch}
        
        >
          Search
        </Button>
      </Box>

      <Box sx={{position: 'relative', width: '100%', padding: '20px'}}>
       <HorizontalScrollbar
        data = {bodyParts}
        bodyPart = {bodyPart}
        setBodyPart = {setBodyPart}
         bodyParts
        />
             
        
      </Box>
    </Stack>
  )
}

export default SearchBar