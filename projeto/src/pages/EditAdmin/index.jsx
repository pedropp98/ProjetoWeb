import React, { useState } from 'react';
import styles from "./styles.module.css";
import Admins from "../../data/admin";

const AdminEditForm = () => {
  let currentAdmin = 0;
  const categoryCounts = {};

  Admins.admins.forEach((admin) => {
    if (admin.name === "ramon") {
      currentAdmin = admin;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the updated values from the form
    const newName = e.target.elements.name.value;
    const newEmail = e.target.elements.email.value;
    const newAddress = e.target.elements.address.value;

    // Update the currentAdmin object with the new values
    currentAdmin.name = newName;
    currentAdmin.email = newEmail;
    currentAdmin.address = newAddress;

    // Update the data in localStorage
    const updatedAdmins = JSON.stringify(Admins);
    localStorage.setItem('Admins', updatedAdmins);

    console.log(Admins); // Log the updated Admins JSON data
  };

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
              defaultValue={currentAdmin.name}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              defaultValue={currentAdmin.email}
              required
            />
            <div>
              <label htmlFor="rg">RG:</label>
              <input
                disabled="true"
                type="text"
                id="rg"
                defaultValue={currentAdmin.rg}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              defaultValue=""
              required
            />
          </div>
          <div>
            <label htmlFor="address">Endereço:</label>
            <input
              type="text"
              id="address"
              defaultValue={currentAdmin.address}
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

export default AdminEditForm;
