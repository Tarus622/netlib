import { Routes, Route, Link } from 'react-router-dom';
import api from './services/api';
import './index.css';
import Body from './Components/Body';
import InsertBook from './Components/InsertBook';
import { useEffect, useState } from 'react';
import BookList from './Components/BooksList';

function App() {

  return (
    <div className='App'> 
      <Routes>
        <Route path='/' element={<Body/>}/>   
        <Route path='/products/create-book' element={<InsertBook/>}/>    
        <Route path='/products/book-list' element={<BookList/>}/> 
      </Routes> 
    </div>
  );
}

export default App;
