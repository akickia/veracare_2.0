import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteService, updateService } from '../../../../core/functions/data';
import ConfirmationModule from '../../../../base/confirmationModule';
import EditService from '../editService';
import PreviewService from '../previewService';

export function AdminCard({ item, action }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [preview, setPreview] = useState(false);
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
    await updateService(img, updatedItem);
    if (response.status === 201) {
      action();
      setPreview(false);
      setOpenEdit(false);
    } else {
      setShowError(true);
    }
  };

  const handleDelete = async () => {
    await deleteService(item.id, item.category);
    action();
    setOpenConf(false);
  };

  return (
    <>
      <article className="admin__card">
        <h4 onClick={() => setOpenEdit(true)}>{item.title}</h4>
        <section className="flex-container">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => setOpenEdit(true)}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={() => {
              setOpenConf(true);
            }}
            icon={faTrash}
          ></FontAwesomeIcon>
        </section>
      </article>
      {openEdit && (
        <EditService
          item={item}
          setOpenEdit={setOpenEdit}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          setPreview={setPreview}
          imgUrl={imgUrl}
          showError={showError}
        />
      )}
      {preview && (
        <PreviewService
          item={item}
          localChanges={localChanges}
          setPreview={setPreview}
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
