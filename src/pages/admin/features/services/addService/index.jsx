import React, { useState } from 'react';
import ImgContainer from '../../imgContainer';
import PreviewService from '../previewService';
import { addService } from '../../../../../core/functions/data';

export default function AddService({ setOpenAdd, action }) {
  const [preview, setPreview] = useState(false);
  const [showError, setShowError] = useState(false);
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
  const [imgUrl, setImgUrl] = useState();

  const handleImageChange = (event) => {
    setImg(event.target.files[0]);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e, key) => {
    const value = e.target.value;
    setLocalChanges((prevChanges) => ({ ...prevChanges, [key]: value }));
  };

  const handlePreview = (e) => {
    e.preventDefault();
    if (img) {
      setPreview(true);
    } else {
      setShowError(true);
    }
  };

  const handleAdd = async () => {
    const response = await addService(img, localChanges);
    if (response.status === 201) {
      action();
      setOpenAdd(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
    setPreview(false);
  };

  return (
    <form className="admin__card--more card" onSubmit={(e) => handlePreview(e)}>
      <button className="close-btn" onClick={() => setOpenAdd(false)}>
        X
      </button>
      <h1>Lägg till tjänst:</h1>
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
          <option value={'yoga'}>Yoga</option>
          <option value={'event'}>Event</option>
        </select>
      </div>
      <section className="container">
        <div>
          <h3>Bilder: </h3>
          <ImgContainer
            setImg={setImg}
            handleChange={handleChange}
            text="Lägg till bild"
            imgUrl={imgUrl}
            handleImageChange={handleImageChange}
          />
        </div>
        <div className="text">
          <h3>Text: </h3>
          <textarea
            type="text"
            required
            onChange={(e) => handleChange(e, 'text')}
          />
        </div>
      </section>
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
      <div>
        <small>Ordning: </small>
        <input
          className="order-input"
          type="number"
          defaultValue={0}
          onChange={(e) => {
            handleChange(e, 'order');
          }}
        ></input>
      </div>
      {showError && (
        <section>
          <h2>Något gick fel, försök igen! </h2>
          <p>
            Dubbelkolla så att alla fält är ifyllda och att en bild är bifogad.
          </p>
        </section>
      )}
      <section className="grid-container">
        <button className="secondary" onClick={() => setOpenAdd(false)}>
          Avbryt
        </button>
        <input
          className="secondary"
          type="submit"
          value={'Förhandsgranska'}
        ></input>
      </section>
      {preview && img && (
        <PreviewService
          item={localChanges}
          localChanges={localChanges}
          setPreview={setPreview}
          action={handleAdd}
          imgUrl={imgUrl}
        />
      )}
    </form>
  );
}
