import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, bodyPart , setBodyPart}) => {

  return (
    <Stack
    className="bodyPart-card"
    type='button'
    alignItems={"center"}
    justifyContent={"center"}
    sx={{
      borderTop : bodyPart=== item ? '4px solid #FF2625': '',
      backgroundColor : '#fff',
      borderBottomLeftRadius : '20px',
      width : '270px',
      height: '282px',
      curser: 'pointer',
      gap: '47px'
    }}
    onClick={()=> {
      setBodyPart(item);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
   
    >
      <img src={Icon} alt="Gym-Icon" style={
        {width:'40px',
        height: '40px'
        }}/>
       <Typography
       sx={{fontWeight: 600, fontSize: '20px',  textTransform: 'capitalize'}}
       fontFamily='Alegreya'
       fontWeight= "bold"
       fontSize = "24px"
       color = '#3A1212'
       
       >
        {item}
       </Typography>
    </Stack>
  )
}

export default BodyPart;