import React from 'react'
import {Box, Typography, Button} from '@mui/material'
import MainBannerImage from '../assets/images/banner.png'
const MainBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'215px', xs:'70px'},
      ml:{sm: '50px'}
  }} position='relative' p='20px'>
        <Typography color='#FF2625' fontWeight='600' sx={{fontSize:"26px"}} mb={3}>
            Fitness Club
        </Typography>

        <Typography fontWeight='700' mb={2}
        sx={{fontSize:{ lg: '44px' ,  xs: '40px' }}}
        >
            Sweat, Smile <br/>
            And Repeat
        </Typography>

        <Typography fontFamily={"Alegreya"} fontSize='22px' lineHeight={'35px'} mb='45px'>
            Check out the most effective exercises
        </Typography>
      
        <Button variant='contained' color='error' href="#exercise" sx ={{ backgroundColor: '#FF2625', padding:{lg:'14px', sm: '12px' , xs:'10px'}, fontSize:{lg:'20px', sm:'16px', xm:'10px'}, borderRadius:'4px', color:'white'}} >
          Explore Exercises
        </Button>
        
        <Typography fontWeight={600} fontSize= {"200px"} color='#FF2625'  sx={{opacity: '0.1', display: {lg: 'block', xs: 'none'}}}>
          Exercise
        </Typography>
        <img src={MainBannerImage} alt=" MainBannerImage" className='hero-banner-img'/>
    </Box>
  )
}

export default MainBanner


