import { useState, useEffect } from 'react';
import './App.css';
import vesipaasky from './assets/1-liian-myohaan-vesipaasky.jpg';
import Book from './components/Book';
import bookService from './services/books';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books));
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
