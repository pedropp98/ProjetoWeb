import React, { useState } from 'react';
import styles from './styles.module.css';

const LoginClient = () => {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values of email and password fields
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    // Verify email and password
    if (email === 'pedropp@gmail.com' && password === '123') {
      // Show success message
      alert('Logado com sucesso!');
      window.location.href = '/searchProducts';

      // You can also redirect using window.location.href if needed
    } else {
      // Show an alert if the email or password is incorrect
      alert('Usuario ou senha incorretos')
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login Cliente</h2>
        <form id="loginForm" onSubmit={handleSubmit} method="POST">
          <input className={styles.input_form} type="text" placeholder="Email" name="email" required />
          <input className={styles.input_form} type="password" placeholder="Password" name="password" required />
          <input type="submit" className={styles.changeLogin} value="Login" />
          <input type="button" className={styles.changeLogin} value="Registre-se" />
        </form>
        {loginError && <p style={{ color: 'red' }}>Username or password is incorrect.</p>}
      </div>
    </div>
  );
};

export default LoginClient;
