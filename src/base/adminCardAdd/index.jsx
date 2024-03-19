import React, { useState } from 'react';
import AdminCardEditImg from '../adminCardEditImg';
import AdminCardPreview from '../AdminCardPreview';
import { addService } from './data';

export default function AdminCardAdd({ setOpenAdd, action }) {
  const [preview, setPreview] = useState(false);
  const [localChanges, setLocalChanges] = useState({
    text: '',
    title: '',
    order: 0,
    alt: '',
    link: '',
    linkText: '',
    category: 'behandlingar',
  });
  const [img, setImg] = useState();

  const handleChange = (e, key) => {
    const value = e.target.value;
    setLocalChanges((prevChanges) => ({ ...prevChanges, [key]: value }));
    console.log(localChanges);
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  const handleAdd = () => {
    addService(img, localChanges);
    action();
    setPreview(false);
    setOpenAdd(false);
  };

  return (
    <form className="admin__card--more card" onSubmit={(e) => handlePreview(e)}>
      <button className="close-btn" onClick={() => setOpenAdd(false)}>
        X
      </button>

      <div>
        <h3>Titel: </h3>
        <input
          type="text"
          required
          onChange={(e) => {
            handleChange(e, 'title');
          }}
        ></input>
      </div>
      <div>
        <h3>Kategori: </h3>
        <select
          onChange={(e) => {
            handleChange(e, 'category');
          }}
          value={localChanges.category}
        >
          <option disabled>Välj kategori</option>
          <option value={'samarbeten'}>Samarbeten</option>
          <option value={'behandlingar'}>Behandlingar</option>
          <option value={'workshop'}>Workshop</option>
        </select>
      </div>
      <div>
        <h3>Bilder: </h3>
        <section className="img">
          <AdminCardEditImg
            setImg={setImg}
            handleChange={handleChange}
            text="Lägg till bild"
          />
          {/* <AdminCardEditImg setImg={setImg2} handleChange={handleChange} />
          <AdminCardEditImg setImg={setImg3} handleChange={handleChange} /> */}
        </section>
      </div>
      <div>
        <h3>Text: </h3>
        <textarea
          type="text"
          required
          onChange={(e) => handleChange(e, 'text')}
        />
      </div>
      <div>
        <h3>Knapptext: </h3>
        <input
          type="text"
          required
          onChange={(e) => handleChange(e, 'linkText')}
        />
      </div>
      <div>
        <h3>Länk: </h3>
        <input type="text" required onChange={(e) => handleChange(e, 'link')} />
      </div>
      <section className="flex-container">
        <button className="secondary" onClick={() => setOpenAdd(false)}>
          Avbryt
        </button>
        <input
          className="secondary"
          type="submit"
          value={'Förhandsgranska'}
        ></input>
      </section>
      {preview && (
        <AdminCardPreview
          item={localChanges}
          localChanges={localChanges}
          setPreview={setPreview}
          action={handleAdd}
        />
      )}
    </form>
  );
}
