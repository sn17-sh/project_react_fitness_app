import React from 'react'
import {Link} from 'react-router-dom'
import gymLogo from '../assets/images/Logo.png'
import {Stack} from '@mui/material'
const  Navbar = () => {
  return (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px'}, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none'}} px= '20px'>


    <Link to={"/"}>
        <img src={gymLogo} alt="Gym__Logo" style={{width:'48px',height:'48px', margin:'0 20px'}}/>
    </Link>

    <Stack direction={'row'} gap={'40px'} alignItems={'flex-end'} fontSize='24px'>
    <Link to={"/"} style={{color:'#3A1212', textDecoration:'none', borderBottom:'3px solid #FF2625'}} fontFamily="Alegreya">
        Home
    </Link>
        <a href="#exercises" style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
   
    </Stack>
    
    </Stack>
  )
}

export default Navbar
