import { useState, useEffect } from 'react';

const useSession = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/session')
      .then(response => response.json())
      .then(data => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error retrieving session user:', error);
        setLoading(false);
      });
  }, []);

  const login = (credentials) => {
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(data => {
        setUser(data.user);
      });
  };

  const logout = () => {
    return fetch('/api/logout', {
      method: 'POST'
    })
      .then(() => {
        setUser(null);
      });
  };

  return { user, loading, login, logout };
};

export default useSession;
