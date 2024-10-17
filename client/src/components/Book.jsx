import { useState } from 'react';
import bookService from '../services/books';

const Book = ({ book }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [originalTitle, setOriginalTitle] = useState(book.originalTitle);
  const [publishedYear, setPublishedYear] = useState(book.publishedYear);
  const [originalPublishedYear, setOriginalPublishedYear] = useState(
    book.originalPublishedYear
  );
  const [seriesNumber, setSeriesNumber] = useState(book.seriesNumber);
  const [originalLanguage, setOriginalLanguage] = useState(
    book.originalLanguage
  );
  const [translator, setTranslator] = useState(book.translator);
  const [imagePath, setImagePath] = useState(book.imagePath);

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

  const handleImagePathChange = (event) => {
    setImagePath(event.target.value);
  };

  const handleDelete = (id) => {
    bookService.destroy(id);
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const saveChanges = (event) => {
    event.preventDefault();
    const updatedBook = {
      title: title,
      originalTitle: originalTitle,
      publishedYear: publishedYear,
      originalPublishedYear: originalPublishedYear,
      seriesNumber: seriesNumber,
      originalLanguage: originalLanguage,
      translator: translator,
      imagePath: imagePath,
    };
    bookService
      .update(book.id, updatedBook)
      .then((response) => setTitle(response.data.title));
    setEditMode(false);
  };
  return !editMode ? (
    <>
      <p>
        <img src={book.imagePath} width="200" />
        <br />
        <span>
          {book.seriesNumber}. {book.title}
        </span>
        <br />
        Julkaisuvuosi: {book.publishedYear}
        <br />({book.originalTitle}, {book.originalPublishedYear})<br />
        Alkuperäiskieli: {book.originalLanguage}
        <br />
        Suomentanut: {book.translator}
      </p>
      <button onClick={() => handleEdit()}>
        muokkaa kirjaa id nro {book.id}
      </button>
      <button onClick={() => handleDelete(book.id)}>
        poista id nro {book.id}
      </button>
    </>
  ) : (
    <>
      <img src={book.imagePath} width="200" />
      <br />
      <form onSubmit={saveChanges}>
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
        <label htmlFor="imagePath">Kuvalinkki</label>
        <input
          id="imagePath"
          value={imagePath}
          onChange={handleImagePathChange}
        />
        <br />
        <button type="submit">Tallenna muutokset</button>
      </form>
      <button onClick={() => handleEdit()}>Peruuta</button>
    </>
  );
};

export default Book;
