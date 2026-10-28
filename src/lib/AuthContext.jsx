import React, { createContext, useContext } from 'react';
// Standalone: no Base44 auth. Public site, no login.
const value = { user: null, isAuthenticated: false, isLoadingAuth: false, isLoadingPublicSettings: false, authError: null, appPublicSettings: null, logout() {}, navigateToLogin() {}, checkAppState() {} };
const AuthContext = createContext(value);
export const AuthProvider = ({ children }) => <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
export const useAuth = () => useContext(AuthContext);
