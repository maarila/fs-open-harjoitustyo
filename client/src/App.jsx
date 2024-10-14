import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import vesipaasky from './assets/1-liian-myohaan-vesipaasky.jpg';
import Book from './components/book';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <>
      <h2>Keltainen kirjasto v0.001</h2>
      <img src={vesipaasky} width="200" alt="kirja1" />
      <img
        src={'/public/2-kerro-minulle-zorbas.jpg'}
        width="200"
        alt="kirja2"
      />
      <div className="book">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </>
  );
}

export default App;
