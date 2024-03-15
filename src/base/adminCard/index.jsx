import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import CardPrimary from '../cardPrimary';
import './style.scss';
import { updateService } from './data';

export function AdminCard({ item, action }) {
  const [openMore, setOpenMore] = useState(false);
  const [preview, setPreview] = useState(false);
  const [localChanges, setLocalChanges] = useState({});

  const handleChange = (e, key) => {
    const value = e.target.value;
    setLocalChanges((prevChanges) => ({ ...prevChanges, [key]: value }));
  };

  const sendUpdate = async () => {
    // console.log({ ...item, ...localChanges });
    await updateService({
      ...item,
      ...localChanges,
      oldCategory: item.category,
    });
    action();
    setPreview(false);
    setOpenMore(false);
  };

  return (
    <>
      <article className="admin__card">
        <h4 onClick={() => setOpenMore(true)}>{item.title}</h4>
        <section className="flex-container">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setOpenMore(true)}
          ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </section>
      </article>
      {openMore && (
        <article className="admin__card--more card">
          <button className="close-btn" onClick={() => setOpenMore(false)}>
            X
          </button>

          <div>
            <h3>Titel: </h3>
            <input
              type="text"
              defaultValue={item.title}
              onChange={(e) => {
                handleChange(e, 'title');
              }}
            ></input>
          </div>
          <div>
            {' '}
            <h3>Kategori: </h3>{' '}
            <select
              defaultValue={item.category}
              onChange={(e) => {
                e, 'category';
              }}
            >
              <option value={'samarbeten'}>Samarbeten</option>
              <option value={'behandlingar'}>Behandlingar</option>
              <option value={'workshop'}>Workshop</option>
            </select>
          </div>
          <div>
            <h3>Bilder: </h3>
            <section className="img">
              <section className="img__card">
                {item.img && <button className="close-btn">x</button>}
                <img src={item.img} />
                <section>
                  <section className="img__card--change">
                    <small>Byta bild?</small>
                    <input type="file" />
                  </section>
                  <section className="img__card--alt">
                    <small>Bildbeskrivning:</small>
                    <input
                      type="text"
                      defaultValue={item.alt}
                      onChange={(e) => handleChange(e, 'alt')}
                    ></input>
                  </section>
                </section>
              </section>

              {item.img2 ? (
                <section className="img__card">
                  <button className="close-btn">x</button>
                  <img src={item.img2} />
                  <section>
                    <section className="img__card--change">
                      <small>Byta bild?</small>
                      <input type="file" />
                    </section>
                    <section className="img__card--alt">
                      <small>Bildbeskrivning:</small>
                      <input
                        type="text"
                        defaultValue={item.alt}
                        onChange={(e) => handleChange(e, 'alt')}
                      ></input>
                    </section>
                  </section>
                </section>
              ) : (
                <section className="img__card img__card--none">
                  <section>
                    <div></div>
                    <section className="img__card--change">
                      <small>Lägg till bild?</small>
                      <input type="file" />
                    </section>
                    <section className="img__card--alt">
                      <small>Bildbeskrivning:</small>
                      <input
                        type="text"
                        defaultValue={item.alt}
                        onChange={(e) => handleChange(e, 'alt')}
                      ></input>
                    </section>
                  </section>
                </section>
              )}

              {item.img3 ? (
                <section className="img__card">
                  <button className="close-btn">X</button>
                  <img src={item.img3} />
                  <section>
                    <section className="img__card--change">
                      <small>Byta bild?</small>
                      <input type="file" />
                    </section>
                    <section className="img__card--alt">
                      <small>Bildbeskrivning:</small>
                      <input
                        type="text"
                        defaultValue={item.alt}
                        onChange={(e) => handleChange(e, 'alt')}
                      ></input>
                    </section>
                  </section>
                </section>
              ) : (
                <section className="img__card img__card--none">
                  <section>
                    <section className="img__card--change">
                      <small>Lägg till bild?</small>
                      <input type="file" />
                    </section>
                    <section className="img__card--alt">
                      <small>Bildbeskrivning:</small>
                      <input
                        type="text"
                        defaultValue={item.alt}
                        onChange={(e) => handleChange(e, 'alt')}
                      ></input>
                    </section>
                  </section>
                </section>
              )}
            </section>
          </div>
          <div>
            <h3>Text: </h3>
            <textarea
              type="text"
              defaultValue={item.text}
              onChange={(e) => handleChange(e, 'text')}
            />
          </div>
          <div>
            <h3>Knapptext: </h3>
            <input
              type="text"
              defaultValue={item.linkText}
              onChange={(e) => handleChange(e, 'linkText')}
            />
          </div>
          <div>
            <h3>Länk: </h3>
            <input
              type="text"
              defaultValue={item.link}
              onChange={(e) => handleChange(e, 'link')}
            />
          </div>
          <section className="flex-container">
            <button className="secondary" onClick={() => setOpenMore(false)}>
              Avbryt
            </button>
            <button
              className="secondary"
              onClick={() => {
                setPreview(true);
                // console.log({ ...item, ...localChanges });
              }}
            >
              Förhandsgranska
            </button>
          </section>
        </article>
      )}
      {/* Move up TODO */}
      {preview && (
        <article className="card admin__card--more">
          <CardPrimary item={{ ...item, ...localChanges }} />
          <section className="grid-container">
            <button
              className="secondary"
              onClick={() => {
                setPreview(false);
              }}
            >
              Gå tillbaka
            </button>
            <button
              className="secondary"
              onClick={() => {
                sendUpdate();
              }}
            >
              Spara ändringar
            </button>
          </section>
        </article>
      )}
    </>
  );
}
