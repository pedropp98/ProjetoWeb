import React, { useState } from 'react';
import styles from './styles.module.css';

const CostumerRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [rg, setRg] = useState('');

  const createClient = async () => {
    if (name && email && password) {
      try {
        // Prepare the data for the request
        const clientData = {
          name: name,
          email: email,
          password: password,
          address: address,
          rg: rg,
        };

        const body = JSON.stringify(clientData);

        // Make the POST request
        const response = await fetch('http://localhost:3000/client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        });

        if (response.ok) {
          alert('Client created successfully!');
          // Handle success, e.g., show a success message or redirect to another page
        } else {
          alert('An error occurred while creating the client. Please try again.');
          // Handle error, e.g., show an error message
        }
      } catch (error) {
        console.error('Error creating client:', error);
        alert('An error occurred while creating the client. Please try again.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createClient();
    window.location.href = '../searchProducts';
  };

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Cadastrar Cliente</h1>
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
            <input type="submit" className={styles.botao_grande} value="Cadastrar" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default CostumerRegistrationForm;
