
import React, { useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-modal';
import './Nakupsez.css';

function Seznam() {
  const [items, setItems] = useState([]);
  const [isArchived, setArchive] = useState(false);
  const [isDone, setDone] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState(['User1', 'User2', 'User3']);
  const [newUserName, setNewUserName] = useState('');
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const removeAll = () => {
    setItems([]);
  };

  const archive = () => {
    setArchive(true);
    alert('Seznam byl archivován');
  };

  const done = () => {
    setDone(true);
    alert('Seznam byl označen jako hotový');
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addUser = () => {
    setUsers((prevUsers) => [...prevUsers, newUserName]);
    setNewUserName('');
    closeModal();
  };

  const addItem = () => {
    const newItem = { id: Date.now(), name: newItemName, quantity: newItemQuantity };
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemName('');
    setNewItemQuantity('');
  };

  return (
    <div class="main-box">
      <Navbar />
      <div className="main-div">
        <div className="title-box">
          <h1>Nákupní Seznam</h1>
        </div>
        <div>
        <div className="list-items">
          {items.map((item) => (
            <div key={item.id} className="item-window">
              <div className="item-container">
                <p>{item.name}</p>
              </div>
              <div className="quantity-section">
                <label>Množství:</label>
                <input type="number" value={item.quantity} readOnly />
              </div>
              <div className="action-buttons">
                <button type="button" className="btn btn-success">
                  Hotovo
                </button>
                <button  onClick={() => removeItem(item.id)} type="button" className="btn btn-danger">
                  Odebrat
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="item-input-box">
          <label>Název položky:</label>
          <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
          <label>Množství:</label>
          <input type="number" value={newItemQuantity} onChange={(e) => setNewItemQuantity(e.target.value)} />
          <button onClick={addItem} type="button" className="btn btn-primary">
            Přidat položku
          </button>
        </div>

        <div className="seznam-button-box">
          <button onClick={openModal} type="button" className="btn btn-primary">
            Přidat uživatele
          </button>
          <button onClick={done} type="button" className="btn btn-success">
            Označit jako hotové
          </button>
          <button onClick={archive} type="button" className="btn btn-warning">
            Archivovat
          </button>
          <button onClick={removeAll} type="button" className="btn btn-danger">
            Smazat položky
          </button>
        </div>
      </div>

      <Modal className="modal-custom-style" isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Přidat uživatele">
        <h2 id="modal-title">Přidat uživatele</h2>
        <div className="modal-box">
          <input placeholder="Jméno uživatele" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
          <button className="btn btn-primary" onClick={addUser}>
            Přidat uživatele
          </button>
          <button className="btn btn-danger" onClick={closeModal}>
            Zavřít
          </button>

          <h3>Seznam uživatelů:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user}</li>
            ))}
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Seznam;
