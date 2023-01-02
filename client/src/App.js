import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Body from './Components/Body';
import InsertBook from './Components/InsertBook';
import { useEffect, useState } from 'react';
import BooksList from './Components/BooksList';

function App() {



  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Body/>}/>   
        <Route path='/products/create-book' element={<InsertBook/>}/>    
        <Route path='/products/books-list' element={<BooksList/>}/> 
      </Routes> 
    </div>
  );
}

export default App;
