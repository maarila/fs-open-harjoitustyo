import { useState, useEffect } from 'react';
import './App.css';
import vesipaasky from './assets/1-liian-myohaan-vesipaasky.jpg';
import Book from './components/Book';
import bookService from './services/books';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [originalPublishedYear, setOriginalPublishedYear] = useState('');
  const [seriesNumber, setSeriesNumber] = useState('');
  const [originalLanguage, setOriginalLanguage] = useState('');
  const [translator, setTranslator] = useState('');

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books));
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOriginalTitleChange = (event) => {
    setOriginalTitle(event.target.value);
  };

  const handlePublishedYearChange = (event) => {
    setPublishedYear(event.target.value);
  };

  const handleOriginalPublishedYearChange = (event) => {
    setOriginalPublishedYear(event.target.value);
  };

  const handleSeriesNumberChange = (event) => {
    setSeriesNumber(event.target.value);
  };

  const handleOriginalLanguageChange = (event) => {
    setOriginalLanguage(event.target.value);
  };

  const handleTranslatorChange = (event) => {
    setTranslator(event.target.value);
  };

  const addBook = (event) => {
    event.preventDefault();
    const newBookObject = {
      title: title,
      originalTitle: originalTitle,
      publishedYear: publishedYear,
      originalPublishedYear: originalPublishedYear,
      seriesNumber: seriesNumber,
      originalLanguage: originalLanguage,
      translator: translator,
    };

    bookService
      .create(newBookObject)
      .then((response) => setBooks([...books, response.data]));

    setTitle('');
    setOriginalTitle('');
    setPublishedYear('');
    setOriginalPublishedYear('');
    setSeriesNumber('');
    setOriginalLanguage('');
    setTranslator('');
  };

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
      <form onSubmit={addBook}>
        <label htmlFor="title">Kirjan nimi</label>
        <input id="title" value={title} onChange={handleTitleChange} />
        <br />
        <label htmlFor="originalTitle">Kirjan alkuperäinen nimi</label>
        <input
          id="originalTitle"
          value={originalTitle}
          onChange={handleOriginalTitleChange}
        />
        <br />
        <label htmlFor="publishedyear">Julkaisuvuosi</label>
        <input
          id="publishedYear"
          value={publishedYear}
          onChange={handlePublishedYearChange}
        />
        <br />
        <label htmlFor="originalPublishedyear">
          Alkuperäinen julkaisuvuosi
        </label>
        <input
          id="originalPublishedYear"
          value={originalPublishedYear}
          onChange={handleOriginalPublishedYearChange}
        />
        <br />
        <label htmlFor="seriesNumber">Osanumero</label>
        <input
          id="seriesNumber"
          value={seriesNumber}
          onChange={handleSeriesNumberChange}
        />
        <br />
        <label htmlFor="originalLanguage">Alkuperäiskieli</label>
        <input
          id="originalLanguage"
          value={originalLanguage}
          onChange={handleOriginalLanguageChange}
        />
        <br />
        <label htmlFor="translator">Suomentaja</label>
        <input
          id="translator"
          value={translator}
          onChange={handleTranslatorChange}
        />
        <br />
        <button type="submit">Tallenna</button>
      </form>
    </>
  );
}

export default App;
