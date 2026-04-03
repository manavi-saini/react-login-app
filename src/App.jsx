import { useState } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  return user ? (
    <HomePage username={user} onLogout={handleLogout} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}
