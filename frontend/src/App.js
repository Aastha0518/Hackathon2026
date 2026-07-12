import './App.css';
import { LoginScreen, FontImport } from './pages/LoginScreen';
import { Dashboard } from './pages/Dashboard';
import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <>
        <FontImport />
        <LoginScreen onLogin={(email) => setUser(email)} />
      </>
    );
  }

  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}

