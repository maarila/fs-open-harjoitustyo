const Book = ({ book }) => {
  return (
    <p>
      {book.title} ({book.originalTitle}, {book.originalPublishedYear})
    </p>
  );
};

export default Book;
