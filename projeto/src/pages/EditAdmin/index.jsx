import React, { useState } from 'react';
import styles from "./styles.module.css";

const AdminEditForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [rg, setRg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // e.g., send data to server or handle validation
    console.log('Submitted:', { name, email, password, address, rg });
  };

  return (
    <main>
      <div className={styles.container}>
        <h1>Editar Admin</h1>
        <form className={styles.registration} onSubmit={handleSubmit}>
          <div >
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div >
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div >
              <label htmlFor="rg">RG:</label>
              <input
                type="text"
                id="rg"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                required
              />
            </div>
          </div>
          <div >
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div >
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <center>
            <button type="submit" className={styles.button} >Editar</button>
          </center>
        </form>
      </div>
    </main>
  );
};

export default AdminEditForm;
