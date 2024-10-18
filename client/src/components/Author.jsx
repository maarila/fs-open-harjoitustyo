import authorService from '../services/authors';

const handleDelete = (id) => {
  authorService.destroy(id);
};

const Author = ({ author }) => {
  return (
    <>
      <h3>{author.name}</h3>
      Linkki Wikipediaan:
      <br /> <a href={author.wikiLink}>{author.wikiLink}</a>
      <br />
      <button onClick={() => handleDelete(author.id)}>
        poista id nro {author.id}
      </button>
    </>
  );
};

export default Author;
