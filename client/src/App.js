import { Routes, Route, Link } from 'react-router-dom';
import api from './services/api';
import './index.css';
import Body from './Components/Body';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Body/>}/>    
      </Routes>
    </div>
  );
}

export default App;
