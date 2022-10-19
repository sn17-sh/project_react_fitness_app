import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails';
import {Box} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Box width={"400px"} sx={ {width: { xl: '1488px '}}} m='auto'>
      <Navbar/>

      <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/exercise/:id"} element={<ExerciseDetails/>}/>
      </Routes>

      <Footer/>
    </Box>
  );
}

export default App;
