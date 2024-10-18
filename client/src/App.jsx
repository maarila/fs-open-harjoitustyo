import { useState, useEffect } from 'react';
import './App.css';
import Book from './components/Book';
import Author from './components/Author';
import bookService from './services/books';
import authorService from './services/authors';

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [title, setTitle] = useState('');
  const [originalTitle, setOriginalTitle] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [originalPublishedYear, setOriginalPublishedYear] = useState('');
  const [seriesNumber, setSeriesNumber] = useState('');
  const [originalLanguage, setOriginalLanguage] = useState('');
  const [translator, setTranslator] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [wikiLink, setWikiLink] = useState('');

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books));
    authorService.getAll().then((authors) => setAuthors(authors));
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

  const handleAuthorNameChange = (event) => {
    setAuthorName(event.target.value);
  };

  const handleWikiLinkChange = (event) => {
    setWikiLink(event.target.value);
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

  const addAuthor = (event) => {
    event.preventDefault();
    const newAuthor = {
      name: authorName,
      wikiLinki: wikiLink,
    };

    authorService
      .create(newAuthor)
      .then((response) => setAuthors([...authors, response.data]));

    setAuthorName('');
    setWikiLink('');
  };

  return (
    <>
      <h2>Keltainen kirjasto v0.01</h2>
      <div className="book">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <h2>Lisää kirja</h2>
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
      <h2>Lisää kirjailija</h2>
      <form onSubmit={addAuthor}>
        <label htmlFor="authorName">Kirjailijan nimi</label>
        <input
          id="authorName"
          value={authorName}
          onChange={handleAuthorNameChange}
        />
        <br />
        <label htmlFor="wikiLink">Linkki wikipediaan:</label>
        <input id="wikiLink" value={wikiLink} onChange={handleWikiLinkChange} />
        <br />
        <button type="submit">Tallenna</button>
      </form>
      {authors.map((author) => (
        <Author key={author.id} author={author} />
      ))}
    </>
  );
}

export default App;
