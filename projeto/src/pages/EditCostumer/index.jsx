import React, { useState } from 'react';
import styles from "./styles.module.css";

const CostumerEditForm = () => {
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
      <div className="container">
        <h1 className={styles.title}>Editar Cadastro</h1>
        <form className={styles.registration_form} onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
              <label htmlFor="rg">RG:</label>
              <input
                type="text"
                id="rg"
                value={rg}
                onChange={(e) => setRg(e.target.value)}
                required
              />
            </div>
          <div className={styles.form_group}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input type="submit" className={styles.botao_grande} value="Confirmar" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default CostumerEditForm;
