import "./HomePage.css";

const cards = [
  { icon: "📊", title: "Analytics", desc: "Track your metrics and visualize performance data in real time." },
  { icon: "🔔", title: "Notifications", desc: "Stay updated with smart alerts configured just for you." },
  { icon: "⚙️",  title: "Settings",     desc: "Customize your experience and manage your preferences." },
  { icon: "💬", title: "Messages",    desc: "Connect with your team through seamless messaging." },
];

export default function HomePage({ username, onLogout }) {
  return (
    <div className="home-bg">
      <nav className="home-nav">
        <div className="nav-brand">⬡ Dashboard</div>
        <div className="nav-right">
          <span className="nav-user">👤 {username}</span>
          <button className="logout-btn" onClick={onLogout}>Log Out</button>
        </div>
      </nav>

      <main className="home-main">
        <div className="home-hero">
          <p className="hero-tag">Welcome back</p>
          <h1 className="hero-title">Hello, <span className="hero-name">{username}</span> 👋</h1>
          <p className="hero-sub">Here's what's happening across your workspace today.</p>
        </div>

        <div className="cards-grid">
          {cards.map((c, i) => (
            <div className="card" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="card-icon">{c.icon}</div>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
