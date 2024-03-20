import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import { deleteService, updateService } from './data';
import ConfirmationModule from '../confirmationModule';
import AdminCardEdit from '../AdminCardEdit';
import AdminCardPreview from '../AdminCardPreview';

export function AdminCard({ item, action }) {
  const url = import.meta.env.VITE_IMG_URL;

  const [openEdit, setOpenEdit] = useState(false);
  const [preview, setPreview] = useState(false);
  const [localChanges, setLocalChanges] = useState({});
  const [img, setImg] = useState();
  const [imgUrl, setImgUrl] = useState(`${url}/${item.img}`);
  const [openConf, setOpenConf] = useState(false);

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
    console.log('Item: ', item);
    console.log('Local: ', localChanges);
    console.log('Updated: ', updatedItem);
    await updateService(img, updatedItem);
    action();
    setPreview(false);
    setOpenEdit(false);
  };

  const handleDelete = () => {
    deleteService(item.id, item.category);
    setOpenConf(false);
    action();
  };

  return (
    <>
      <article className="admin__card">
        <h4 onClick={() => setOpenEdit(true)}>{item.title}</h4>
        <section className="flex-container">
          <div>
            {/* <h3>Ordning: </h3>
            <input
              type="number"
              required
              defaultValue={item.order}
              onChange={(e) => {
                handleChange(e, 'order');
              }}
            ></input> */}
          </div>

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
        <AdminCardEdit
          item={item}
          setOpenEdit={setOpenEdit}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          setPreview={setPreview}
          imgUrl={imgUrl}
        />
      )}
      {preview && (
        <AdminCardPreview
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
