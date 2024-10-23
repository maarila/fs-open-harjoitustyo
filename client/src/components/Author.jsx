import { useState } from 'react';
import authorService from '../services/authors';

const Author = ({ author }) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(author.name);
  const [wikiLink, setWikiLink] = useState(author.wikiLink);

  const handleDelete = (id) => {
    authorService.destroy(id);
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleWikiLinkChange = (event) => {
    setWikiLink(event.target.value);
  };

  const saveChanges = (event) => {
    event.preventDefault();

    const updatedAuthor = {
      name: name,
      wikiLink: wikiLink,
    };

    authorService
      .update(author.id, updatedAuthor)
      .then((response) => setName(response.data.name));
    setEditMode(false);
  };

  return !editMode ? (
    <>
      <h3>{author.name}</h3>
      Linkki Wikipediaan:
      <br /> <a href={author.wikiLink}>{author.wikiLink}</a>
      <br />
      <button onClick={() => handleEdit()}>
        muokkaa kirjaa id nro {author.id}
      </button>
      <button onClick={() => handleDelete(author.id)}>
        poista id nro {author.id}
      </button>
    </>
  ) : (
    <>
      <form onSubmit={saveChanges}>
        <label htmlFor="name">Kirjailijan nimi</label>
        <input id="name" value={name} onChange={handleNameChange} />
        <br />
        <label htmlFor="wikiLink">Linkki Wikipediaan</label>
        <input id="wikiLink" value={wikiLink} onChange={handleWikiLinkChange} />
        <br />
        <br />
        <button type="submit">Tallenna muutokset</button>
      </form>
      <button onClick={() => handleEdit()}>Peruuta</button>
    </>
  );
};

export default Author;
