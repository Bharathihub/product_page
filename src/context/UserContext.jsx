import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    // In a real app, you'd also store the token in localStorage/sessionStorage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  const signup = (userData) => {
    // In a real app, you'd make an API call here
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      joinDate: new Date().toISOString()
    };
    login(newUser);
  };

  // Check for existing user on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        login,
        logout,
        signup
      }}
    >
      {children}
    </UserContext.Provider>
  );
};