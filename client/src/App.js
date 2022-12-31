import { Routes, Route, Link } from 'react-router-dom';
import api from './services/api';
import './index.css';
import Body from './Components/Body';
import InsertBook from './Components/InsertBook';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Body/>}/>   
        <Route path='/adicionar_livro' element={<InsertBook/>}/>    
      </Routes>
    </div>
  );
}

export default App;
