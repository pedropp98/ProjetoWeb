import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const LoginClient = () => {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values of email and password fields
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    // Create an object with the email and password
    const credentials = {
      email: email,
      password: password
    };

    // Send the credentials to the server for verification
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      //.then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          // Login successful, redirect to the desired page
          alert('Logado com sucesso!');
          window.location.href = '/searchProducts';
        } else {
          console.log(data)
          // Login failed, show an error message
          setLoginError(true);
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
        // Handle error
      });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login Cliente</h2>
        <form id="loginForm" onSubmit={handleSubmit} method="POST">
          <input className={styles.input_form} type="text" placeholder="Email" name="email" required />
          <input className={styles.input_form} type="password" placeholder="Password" name="password" required />
          <input type="submit" className={styles.changeLogin} value="Login" />
          <Link to='/createCostumer'><input type="button" className={styles.changeLogin} value="Registre-se" /></Link>
        </form>
        {loginError && <p style={{ color: 'red' }}>Usuario ou senha incorretos.</p>}
      </div>
    </div>
  );
};

export default LoginClient;
