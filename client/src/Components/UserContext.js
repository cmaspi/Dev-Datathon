import React, { useState, useEffect, createContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [tokenID, setTokenID] = useState(localStorage.getItem('tokenid') || '');
  const [signedIn, setSignedIn] = useState(!!localStorage.getItem('tokenid'));

  // Allow change in localstorage to cause an update to context variables
  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log('Token Changed, Updating in UserContext');
      setName(localStorage.getItem('name'));
      setEmail(localStorage.getItem('email'));
      setTokenID(localStorage.getItem('tokenid'));
    });
  }, []);

  const login = (userName, userEmail, userTokenID) => {
    localStorage.setItem('name', userName);
    localStorage.setItem('email', userEmail);
    localStorage.setItem('tokenid', userTokenID);
    setName(userName);
    setEmail(userEmail);
    setTokenID(userTokenID);
    setSignedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('tokenid');
    setName('');
    setEmail('');
    setTokenID('');
    setSignedIn(false);
  };

  return (
    <UserContext.Provider
      value={{
        name,
        email,
        tokenID,
        signedIn,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
