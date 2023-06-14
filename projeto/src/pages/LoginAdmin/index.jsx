import React from 'react';
import styles from './styles.module.css';

const LoginClient = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login Administrador</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="submit" className={styles.changeLogin} value="Login" />
          <input type="button" className={styles.changeLogin} value="Registre-se" />
        </form>
      </div>
    </div>
  );
};

export default LoginClient;
