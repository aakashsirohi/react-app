// import { useState } from 'react'
import './App.css'
import LandingPage from './landingPage';
import Navbar from './navBar';
import Syllabus from './syllabus'; 
import OnGameState from './onGameStateUpdate';


function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Syllabus />
      <OnGameState />
    </>
  );
}

export default App
