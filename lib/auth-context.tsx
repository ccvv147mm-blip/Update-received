import React, { createContext, useContext } from 'react';

interface AuthContextType {
  user: null;
  session: null;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  signOut: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: null, session: null, signOut: () => {} }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
