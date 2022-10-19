import React from 'react'
import {Button,Typography, Stack} from "@mui/material"
import {LazyLoadImage} from 'react-lazy-load-image-component'
import EquipmentIcon from '../assets/icons/equipment.png'
import BodyPartIcon from '../assets/icons/body-part.png' 
import TargetIcon from '../assets/icons/target.png' 


const Details = ({exerciseDetail}) => {
  const {bodyPart, equipment, gifUrl, name, target} = exerciseDetail;

const extraDetails = [
    {
       icon: EquipmentIcon,
       name: equipment,
    },
    {
        icon: BodyPartIcon,
        name: bodyPart
    },
    {
        icon: TargetIcon,
        name: target,
     }

  ]
    return (
    <Stack gap={'60px'} sx={{flexDirection:{lg: 'row'},  p: '20px', alignItems : 'center'}}>
        
        <LazyLoadImage src={gifUrl} alt="Exercise-Img" className='detail-image'/>
<Stack  sx={{gap: {lg: '35px', xs: '20px'}}}>
        <Typography variant="h2" textTransform={'capitalize'} fontWeight="bold">{name}</Typography>

        <Typography variant= "h6" sx={{fontSize:{lg: '24px', xs: '18px'}} } color='#4F4C4C'>Exercise keep you Strong.{" "} <span style={{textTransform:'capitalize'}}>{name}</span>   is one of the best  exercise  to target your {target}. <br/> It will help you to improve your health and strength. It also please your<br/> mood and helps to gain energy.</Typography>

        
          {
            extraDetails.map((item, index)=>(
                <Stack key={index} direction="row" gap="24px" alignItems = "center">
                    <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                    <LazyLoadImage src={item.icon} alt="icon" style={{width: '50px', height: '50px'}}/>
                    </Button>
                  <Typography textTransform='capitalize' sx={{fontSize:{lg: '30px', xs: '20px'}}}>
                    {item.name}
                  </Typography>
                </Stack>
            ))
          }
       </Stack> 
    </Stack>
  )
}

export default Details