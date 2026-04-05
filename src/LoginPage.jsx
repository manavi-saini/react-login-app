import { useState } from "react";
import "./LoginPage.css";

const VALID_USERS = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
];

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = VALID_USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setError("");
      onLogin(username);
    } else {
      setError("Invalid username or password.");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="login-bg">
      <div className={`login-card ${shake ? "shake" : ""}`}>
        <div className="login-header">
          <div className="login-logo">⬡</div>
          <h1 className="login-title">Welcome User</h1>
          <p className="login-subtitle">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="field-group">
            <label className="field-label">Username</label>
            <input
              className="field-input"
              type="text"
              placeholder="Enter user name here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="field-group">
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="error-msg">{error}</p>}

          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>

        <p className="login-hint">
          Try <strong>admin</strong> / <strong>admin123</strong>
        </p>
      </div>
    </div>
  );
}
