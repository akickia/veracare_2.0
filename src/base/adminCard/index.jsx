import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import { deleteService, updateService } from './data';
import ConfirmationModule from '../confirmationModule';
import AdminCardEdit from '../AdminCardEdit';
import AdminCardPreview from '../AdminCardPreview';
import { AnimatePresence } from 'framer-motion';

export function AdminCard({ item, action }) {
  const [openEdit, setOpenEdit] = useState(false);
  const [preview, setPreview] = useState(false);
  const [localChanges, setLocalChanges] = useState({});
  const [img, setImg] = useState();
  const [openConf, setOpenConf] = useState(false);

  const handleChange = (e, key) => {
    const value = e.target.value;
    setLocalChanges((prevChanges) => ({ ...prevChanges, [key]: value }));
  };

  const sendUpdate = async () => {
    const updatedItem = {
      ...item,
      ...localChanges,
      oldCategory: item.category,
    };
    await updateService(img, updatedItem);
    action();
    setPreview(false);
    setOpenEdit(false);
  };

  const handleDelete = () => {
    console.log(openConf);
    deleteService(item.id, item.category);
    setOpenConf(false);
    action();
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
        <AdminCardEdit
          item={item}
          setOpenEdit={setOpenEdit}
          handleChange={handleChange}
          setImg={setImg}
          setPreview={setPreview}
        />
      )}
      {preview && (
        <AdminCardPreview
          item={item}
          localChanges={localChanges}
          setPreview={setPreview}
          action={sendUpdate}
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
