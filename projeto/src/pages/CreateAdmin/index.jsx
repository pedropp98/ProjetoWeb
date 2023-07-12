import React, { useState } from 'react';
import styles from "./styles.module.css";

const AdminRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [rg, setRg] = useState('');

  const createAdmin = async () => {
    if (name && email && password) {
      try {
        // Prepare the data for the request
        const adminData = {
          nome: name,
          email: email,
          password: password,
          address: address,
          rg: rg,
        };

        const body = JSON.stringify(adminData);

        // Make the POST request
        const response = await fetch('http://localhost:3000/admin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        });

        if (response.ok) {
          alert('Administrador criado com sucesso!');
          window.location.href = '../admin';
          // Tratar sucesso, por exemplo, exibir uma mensagem de sucesso ou redirecionar para outra página
        } else {
          alert('Ocorreu um erro ao criar o administrador. Por favor, tente novamente.');
          // Tratar erro, por exemplo, exibir uma mensagem de erro
        }
        } catch (error) {
          console.error('Erro ao criar o administrador:', error);
          alert('Ocorreu um erro ao criar o administrador. Por favor, tente novamente.');
        }        
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAdmin();
  };

  return (
    <main>
      <div className="container">
        <h1 className={styles.title}>Cadastrar Administrador</h1>
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
            <input type="submit" className={styles.botao_grande} value="Cadastrar Administrador" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminRegistrationForm;
