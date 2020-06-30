import React, { useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');


const GererVoiture = ({
  addVoiture,
  setModel,
  setImage,
  setMatricule,
  setDescription,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    addVoiture(e);
    setIsOpen(false);
  };


  return (
    <div>

      <div className="col-sm">
        <button type="button" className="btn btn-danger" onClick={openModal}>Ajouter</button>
      </div>


      <Modal
        className='add-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className='addVoiture-h1'>Ajouter une voiture</h1>
        <form>
          <label>Model</label>
          <input
            type='text'
            name='name'
            required
            onChange={(e) => setModel(e.target.value)}
          />
          <label>Matricule</label>
          <input
            type='text'
            name='matricule'
            required
            onChange={(e) => setMatricule(e.target.value)}
          />
          <label>Image</label>
          <input
            type='url'
            name='image'
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Description</label>
          <textarea
            type='text'
            name='description'
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className='Modal-btn' onClick={handleSubmit}>
          Submit
        </button>
        <button className='Modal-btn' onClick={closeModal}>
          close
        </button>
      </Modal>




    </div>
  )
}

export default GererVoiture;
