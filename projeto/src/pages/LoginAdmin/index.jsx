import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const LoginAdmin = () => {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values of email and password fields
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    const loginData = {
      email: email,
      password: password,
    }

    const body = JSON.stringify(loginData);

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    response.json().then(data => console.log(data));

    if(response.ok) {
      alert('Logado com sucesso!');
      window.location.href = '/admin';
    }else{
      alert('Usuario ou senha incorretos')
    }

    // // Verify email and password
    // if (email === 'ramon@gmail.com' && password === '123') {
    //   // Show success message
    //   alert('Logado com sucesso!');
    //   window.location.href = '/admin';

    //   // You can also redirect using window.location.href if needed
    // } else {
    //   // Show an alert if the email or password is incorrect
    //   alert('Usuario ou senha incorretos')
    // }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login Administrador</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input className={styles.input_form} type="text" placeholder="Email" name="email" required />
          <input className={styles.input_form} type="password" placeholder="Password" name="password" required />
          <input type="submit" className={styles.changeLogin} value="Login" />
          <Link to='/createAdmin'><input type="button" className={styles.changeLogin} value="Registre-se" /></Link>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
