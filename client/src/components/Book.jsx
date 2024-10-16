import bookService from '../services/books';

const Book = ({ book }) => {
  const handleDelete = (id) => {
    bookService.destroy(id);
  };
  return (
    <>
      <p>
        {book.title} ({book.originalTitle}, {book.originalPublishedYear})
      </p>
      <button onClick={() => handleDelete(book.id)}>
        poista id nro {book.id}
      </button>
    </>
  );
};

export default Book;
