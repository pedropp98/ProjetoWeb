import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css";

const AdminEdit = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/admin/64ae575e3ac04da4fc53e677')
      .then(response => response.json())
      .then(data => {
        setAdmin(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error retrieving admin data:', error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the updated values from the form
    const newName = e.target.elements.name.value;
    const newEmail = e.target.elements.email.value;
    const newAddress = e.target.elements.address.value;

    // Create the updated admin object
    const updatedAdmin = {
      ...admin,
      name: newName,
      email: newEmail,
      address: newAddress
    };

    // Make a PUT request to update the admin data
    fetch('http://localhost:3000/admin/64ae575e3ac04da4fc53e677', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedAdmin)
    })
      .then(response => {
        if (response.ok) {
          alert('Admin atualizado com sucesso!');
          // Handle success, e.g., show a success message or redirect to another page
        } else {
          alert('Ocorreu um erro, tente novamente.');
          // Handle error, e.g., show an error message
        }
      })
      .catch(error => {
        console.error('Error updating admin:', error);
        alert('Ocorreu um erro, tente novamente.');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className={styles.container}>
        <h1>Editar Admin</h1>
        <form className={styles.registration} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              defaultValue={admin?.name || ''}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              defaultValue={admin?.email || ''}
              required
            />
          </div>
          <div>
            <label htmlFor="rg">RG:</label>
            <input
              type="text"
              id="rg"
              defaultValue={admin?.rg || ''}
              disabled
            />
          </div>
          <div>
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="address"
              defaultValue={admin?.address || ''}
              required
            />
          </div>
          <div className={styles.form_group}>
            <input type="submit" className={styles.botao_grande} value="Editar Administrador" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminEdit;
