import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {fetchData, options,optionsYoutube} from '../Utils/fetchData'
import {Box} from '@mui/material'
import Details from '../Components/Details'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'



const ExerciseDetails = () => 
{
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExerciseData = async()=>{
       const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

       const fetchExerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, options);
       setExerciseDetail(fetchExerciseDetailsData);

       const fetchYoutubeVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${fetchExerciseDetailsData.name} exercise`, optionsYoutube);
       setExerciseVideos(fetchYoutubeVideosData.contents);

       const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${fetchExerciseDetailsData.target}`, options);
        setTargetMuscleExercises(targetMuscleExerciseData);

        
       const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${
        fetchExerciseDetailsData.equipment
       }
       `, options);
    
      setEquipmentExercises(equipmentExerciseData);
       
       
      
    }
    fetchExerciseData();
  }, [id])
  



  return (
    <Box>
     <Details exerciseDetail={exerciseDetail}/>
     <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
     <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails;