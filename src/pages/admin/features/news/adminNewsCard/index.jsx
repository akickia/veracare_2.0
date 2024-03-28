import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteNews, updateNews } from '../../../../../core/functions/data';
import ConfirmationModule from '../../../../../base/confirmationModule';
import EditNews from '../editNews';
import PreviewNews from '../previewNews';

export function AdminNewsCard({ item, action }) {
  const [openNewsEdit, setOpenNewsEdit] = useState(false);
  const [previewNews, setPreviewNews] = useState(false);
  const [localChanges, setLocalChanges] = useState({});
  const [img, setImg] = useState();
  const [imgUrl, setImgUrl] = useState(item.img);
  const [openConf, setOpenConf] = useState(false);
  const [showError, setShowError] = useState(false);

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

  const sendUpdate = async () => {
    const updatedItem = {
      ...item,
      ...localChanges,
    };
    const response = await updateNews(img, updatedItem);
    if (response.status === 201) {
      action();
      setPreviewNews(false);
      setOpenNewsEdit(false);
    } else {
      setShowError(true);
    }
  };

  const handleDelete = async () => {
    await deleteNews(item.id);
    action();
    setOpenConf(false);
  };

  return (
    <>
      <article className="admin__card">
        <section
          className="admin-news-container"
          onClick={() => setOpenNewsEdit(true)}
        >
          <h4>{item.title}</h4>
          <p>
            <small>{item.text}</small>
          </p>
        </section>
        <section className="flex-container">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setOpenNewsEdit(true)}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={() => {
              setOpenConf(true);
            }}
            icon={faTrash}
          ></FontAwesomeIcon>
        </section>
      </article>
      {openNewsEdit && (
        <EditNews
          item={item}
          setOpenNewsEdit={setOpenNewsEdit}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          setPreviewNews={setPreviewNews}
          imgUrl={imgUrl}
          showError={showError}
        />
      )}
      {previewNews && (
        <PreviewNews
          item={item}
          localChanges={localChanges}
          setPreviewNews={setPreviewNews}
          action={sendUpdate}
          imgUrl={imgUrl}
        />
      )}
      {openConf && (
        <ConfirmationModule
          title={item.title}
          action={handleDelete}
          setOpenConf={setOpenConf}
        />
      )}
    </>
  );
}
