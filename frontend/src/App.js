import './App.css';
import { LoginScreen, FontImport } from './pages/LoginScreen';
import { Dashboard } from './pages/Dashboard';
import React, { useState } from "react";

const SESSION_KEY = "ecosphere_user";

export default function App() {
  // Seed from localStorage so the session survives page refreshes
  const [user, setUser] = useState(() => localStorage.getItem(SESSION_KEY));

  const handleLogin = (email) => {
    localStorage.setItem(SESSION_KEY, email);
    setUser(email);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  if (!user) {
    return (
      <>
        <FontImport />
        <LoginScreen onLogin={handleLogin} />
      </>
    );
  }

  return <Dashboard user={user} onLogout={handleLogout} />;
}

