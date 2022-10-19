import React from 'react'
import {Box, Typography, Stack} from '@mui/material'
import {LazyLoadImage} from 'react-lazy-load-image-component'

const ExerciseVideos = ({exerciseVideos, name}) => {

  return (
    <Box sx={{marginTop: {lg:'200px', xs: '20px'}}} p = '20px'>
        <Typography mb='33px' variant='h3'>
            Watch <span style={{textTransform:'capitalize', color: '#FF2625'}}>{name}</span> exercise videos
        </Typography>

    <Stack sx={{flexDirection:{lg:'row'}, gap:{lg: '80px', xs: '40px'}}} justifyContent='flex-start' alignItems={'center'}>
        {
            exerciseVideos.slice(0,3).map((item,index)=>(
               
                   <a href= {`https://www.youtube.com/watch?v=${item.video.videoId
}`}                key={index}
                   className={'exercise-video'}
                   target="_blank"
                   rel= "noreferrer"
                   >
                
                    <LazyLoadImage src={item.video.thumbnails[0].url} style={{width: '400px', height:'230px'}}/>
                    
                    <Box textAlign={'center'}>
                    <Typography variant ='h5' color='#000' sx={{fontSize: {lg: '28px', xs: '18px'}}} fontWeight={600} mb='10px'>
                     {item.video.title}
                    </Typography>
                    <Typography variant ='h5' color='#000' fontSize='16px'>
                        {item.video.channelName}
                    </Typography>

                    </Box>
                    </a>
             
            ))
        }
        </Stack>
    </Box>
  )
}

export default ExerciseVideos

