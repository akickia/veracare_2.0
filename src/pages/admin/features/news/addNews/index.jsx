import React, { useState } from 'react';
import ImgContainer from '../../imgContainer';
import PreviewNews from '../previewNews';
import { addNews } from '../../../../../core/functions/data';

export default function AddNews({ setOpenAddNews, action }) {
  const [previewNews, setPreviewNews] = useState(false);
  const [showError, setShowError] = useState(false);
  const [localChanges, setLocalChanges] = useState({
    text: '',
    title: '',
    alt: '',
    link: '',
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
      setPreviewNews(true);
    } else {
      setShowError(true);
    }
  };

  const handleAddNews = async () => {
    const response = await addNews(img, localChanges);
    if (response.status === 201) {
      action();
      setOpenAddNews(false);
      setShowError(false);
    } else {
      setShowError(true);
    }
    setPreviewNews(false);
  };

  return (
    <form className="admin__card--more card" onSubmit={(e) => handlePreview(e)}>
      <button className="close-btn" onClick={() => setOpenAddNews(false)}>
        X
      </button>
      <h1>Lägg till nyhet:</h1>
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
        <h3>Länk: </h3>
        <input type="text" required onChange={(e) => handleChange(e, 'link')} />
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
        <button className="secondary" onClick={() => setOpenAddNews(false)}>
          Avbryt
        </button>
        <input
          className="secondary"
          type="submit"
          value={'Förhandsgranska'}
        ></input>
      </section>
      {previewNews && (
        <PreviewNews
          item={localChanges}
          localChanges={localChanges}
          setPreviewNews={setPreviewNews}
          action={handleAddNews}
          imgUrl={imgUrl}
        />
      )}
    </form>
  );
}
