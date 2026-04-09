import { useState } from "react";
import './App.css';
const properties = [
  {
    id: 1,
    title: "Skyline Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹4,20,00,000",
    type: "Buy",
    category: "Penthouse",
    beds: 4,
    baths: 3,
    sqft: 3200,
    status: "Available",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 2,
    title: "Green Valley Villa",
    location: "Pune, Maharashtra",
    price: "₹2,85,00,000",
    type: "Buy",
    category: "Villa",
    beds: 5,
    baths: 4,
    sqft: 4800,
    status: "Available",
    tag: "New",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    id: 3,
    title: "Metro Studio Loft",
    location: "Bangalore, Karnataka",
    price: "₹38,000/mo",
    type: "Rent",
    category: "Apartment",
    beds: 1,
    baths: 1,
    sqft: 750,
    status: "Available",
    tag: null,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  },
  {
    id: 4,
    title: "Heritage Row House",
    location: "Jaipur, Rajasthan",
    price: "₹1,65,00,000",
    type: "Buy",
    category: "Row House",
    beds: 3,
    baths: 2,
    sqft: 2100,
    status: "Sold",
    tag: null,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    id: 5,
    title: "Lakeside Retreat",
    location: "Udaipur, Rajasthan",
    price: "₹3,50,00,000",
    type: "Buy",
    category: "Villa",
    beds: 6,
    baths: 5,
    sqft: 5500,
    status: "Available",
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 6,
    title: "Corporate Flat",
    location: "Hyderabad, Telangana",
    price: "₹55,000/mo",
    type: "Rent",
    category: "Apartment",
    beds: 2,
    baths: 2,
    sqft: 1200,
    status: "Available",
    tag: null,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  },
  
];
 
const stats = [
  { label: "Properties Listed", value: "1,240+", icon: "🏠" },
  { label: "Happy Clients", value: "3,800+", icon: "🤝" },
  { label: "Cities Covered", value: "48", icon: "🌆" },
  { label: "Deals Closed", value: "₹920Cr+", icon: "💰" },
];
 
const tagColors = {
  Featured: { bg: "#fef3c7", color: "#92400e" },
  New: { bg: "#d1fae5", color: "#065f46" },
  Luxury: { bg: "#ede9fe", color: "#5b21b6" },
};
 
function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [activePage, setActivePage] = useState("listings");
 
  const tabs = ["All", "Apartment", "Villa", "Penthouse", "Row House"];
  const types = ["All", "Buy", "Rent"];
 
  const filtered = properties.filter((p) => {
    const matchTab = activeTab === "All" || p.category === activeTab;
    const matchType = activeType === "All" || p.type === activeType;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchType && matchSearch;
  });
 
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };
 
  return (
    <>
      
 
      {/* SIDEBAR */}
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <span>Estate</span>Pro
        </div>
        <div className="sidebar-nav">
          {[
            { id: "dashboard", icon: "📊", label: "Dashboard" },
            { id: "listings", icon: "🏘️", label: "Listings" },
            { id: "wishlist", icon: "❤️", label: "Wishlist" },
            { id: "clients", icon: "👥", label: "Clients" },
            { id: "analytics", icon: "📈", label: "Analytics" },
            { id: "settings", icon: "⚙️", label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => { setActivePage(item.id); setSidebarOpen(false); }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
              {item.id === "wishlist" && wishlist.length > 0 && (
                <span style={{ marginLeft: "auto", background: "var(--accent)", color: "#fff", borderRadius: "50px", padding: "1px 8px", fontSize: "0.72rem", fontWeight: 700 }}>
                  {wishlist.length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <div className="agent-card">
            <div className="agent-avatar">AK</div>
            <div>
              <div className="agent-name">Arjun Kumar</div>
              <div className="agent-role">Senior Agent</div>
            </div>
          </div>
        </div>
      </nav>
 
      {/* MAIN */}
      <div className={`main ${sidebarOpen ? "" : ""}`}>
        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left">
            <button className="menu-btn" onClick={() => {
              console.log('button  clicked ');
              setSidebarOpen((prev)=> !prev);
            }}>☰</button>
            <div className="search-wrap">
              <span className="search-icon"></span>
              <input
                placeholder="Search properties…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="topbar-right">
            <div className="icon-btn">
              🔔
              <span className="badge">3</span>
            </div>
            <div className="icon-btn" onClick={() => setActivePage("wishlist")}>
              ❤️
              {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
            </div>
            <button className="add-btn" onClick={() => setActivePage("listings")}>
              + Add Property
            </button>
          </div>
        </div>
 
        {/* DASHBOARD PAGE */}
        {activePage === "dashboard" && (
          <div className="page">
            <div className="dashboard-hero">
              <div className="hero-title">Good Morning, <span className="hero-accent">Arjun</span> 👋</div>
              <div className="hero-sub">You have 3 new inquiries and 2 scheduled visits today.</div>
            </div>
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-icon">{s.icon}</div>
                  <div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-title">Recent Activity</div>
            <div className="activity-list">
              {[
                { color: "#c8974a", text: "New inquiry for Skyline Penthouse from Priya Sharma", time: "10 min ago" },
                { color: "#2d6a4f", text: "Deal closed — Heritage Row House, Jaipur (₹1.65Cr)", time: "2 hr ago" },
                { color: "#6366f1", text: "Site visit scheduled for Green Valley Villa on Apr 9", time: "5 hr ago" },
                { color: "#b91c1c", text: "Listing expired — 3BHK Andheri West, Mumbai", time: "Yesterday" },
                { color: "#0ea5e9", text: "New client registered — Rahul Mehta, Hyderabad", time: "Yesterday" },
              ].map((a, i) => (
                <div className="activity-item" key={i}>
                  <div className="activity-dot" style={{ background: a.color }}></div>
                  <div className="activity-text">{a.text}</div>
                  <div className="activity-time">{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}
 
        {/* LISTINGS PAGE */}
        {activePage === "listings" && (
          <div className="page">
            <div className="page-header">
              <div className="page-title">Property Listings</div>
              <div className="page-subtitle">{filtered.length} properties found</div>
            </div>
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <div className="stat-icon">{s.icon}</div>
                  <div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="filters-row">
              <div className="tabs">
                {tabs.map((t) => (
                  <button key={t} className={`tab-btn ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)}>{t}</button>
                ))}
              </div>
              <div className="type-toggle">
                {types.map((t) => (
                  <button key={t} className={`type-btn ${activeType === t ? "active" : ""}`} onClick={() => setActiveType(t)}>{t}</button>
                ))}
              </div>
            </div>
            <div className="properties-grid">
              {filtered.map((p) => (
                <div className="prop-card" key={p.id} onClick={() => setSelectedProperty(p)}>
                  <div className="prop-image-wrap">
                    <img src={p.image} alt={p.title} />
                    {p.tag && (
                      <span className="prop-tag" style={tagColors[p.tag]}>
                        {p.tag}
                      </span>
                    )}
                    <span className="prop-type-badge">{p.type}</span>
                    <button
                      className="wish-btn"
                      onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }}
                    >
                      {wishlist.includes(p.id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                  <div className="prop-body">
                    <div className="prop-title">{p.title}</div>
                    <div className="prop-location">📍 {p.location}</div>
                    <div className="prop-meta">
                      <div className="meta-item">🛏 {p.beds} Beds</div>
                      <div className="meta-item">🚿 {p.baths} Baths</div>
                      <div className="meta-item">📐 {p.sqft} sq.ft</div>
                    </div>
                    <div className="prop-footer">
                      <div className="prop-price">{p.price}</div>
                      <span className={`prop-status ${p.status === "Available" ? "status-available" : "status-sold"}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">🏚️</div>
                <div className="empty-text">No properties match your filters.</div>
              </div>
            )}
          </div>
        )}
 
        {/* WISHLIST PAGE */}
        {activePage === "wishlist" && (
          <div className="page">
            <div className="page-header">
              <div className="page-title">My Wishlist</div>
              <div className="page-subtitle">{wishlist.length} saved properties</div>
            </div>
            {wishlist.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">💔</div>
                <div className="empty-text">No saved properties yet. Browse listings and tap ❤️ to save.</div>
              </div>
            ) : (
              <div className="wishlist-grid">
                {properties.filter((p) => wishlist.includes(p.id)).map((p) => (
                  <div className="prop-card" key={p.id} onClick={() => setSelectedProperty(p)}>
                    <div className="prop-image-wrap">
                      <img src={p.image} alt={p.title} />
                      <button
                        className="wish-btn"
                        onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }}
                      >❤️</button>
                    </div>
                    <div className="prop-body">
                      <div className="prop-title">{p.title}</div>
                      <div className="prop-location">📍 {p.location}</div>
                      <div className="prop-meta">
                        <div className="meta-item">🛏 {p.beds} Beds</div>
                        <div className="meta-item">🚿 {p.baths} Baths</div>
                        <div className="meta-item">📐 {p.sqft} sq.ft</div>
                      </div>
                      <div className="prop-footer">
                        <div className="prop-price">{p.price}</div>
                        <span className={`prop-status ${p.status === "Available" ? "status-available" : "status-sold"}`}>{p.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
 
        {/* CLIENTS PAGE */}
        {activePage === "clients" && (
          <div className="page">
            <div className="page-header">
              <div className="page-title">Clients</div>
              <div className="page-subtitle">Manage your client relationships</div>
            </div>
            {[
              { name: "Priya Sharma", city: "Mumbai", interest: "Penthouse", budget: "₹5Cr", status: "Hot Lead" },
              { name: "Rahul Mehta", city: "Hyderabad", interest: "Apartment", budget: "₹80L", status: "Active" },
              { name: "Sunita Patel", city: "Jaipur", interest: "Villa", budget: "₹3.5Cr", status: "Closed" },
              { name: "Vikram Singh", city: "Delhi", interest: "Row House", budget: "₹2Cr", status: "Active" },
            ].map((c, i) => (
              <div className="activity-item" key={i} style={{ marginBottom: 10 }}>
                <div className="agent-avatar" style={{ background: ["#c8974a", "#2d6a4f", "#6366f1", "#0ea5e9"][i] }}>{c.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{c.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>📍 {c.city} · Interested in {c.interest} · Budget: {c.budget}</div>
                </div>
                <span className={`prop-status ${c.status === "Closed" ? "status-sold" : "status-available"}`}>{c.status}</span>
              </div>
            ))}
          </div>
        )}
 
        {/* ANALYTICS / SETTINGS placeholder */}
        {(activePage === "analytics" || activePage === "settings") && (
          <div className="page">
            <div className="empty-state">
              <div className="empty-icon">{activePage === "analytics" ? "📈" : "⚙️"}</div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 8 }}>
                {activePage === "analytics" ? "Analytics" : "Settings"}
              </div>
              <div className="empty-text">This section is coming soon.</div>
            </div>
          </div>
        )}
      </div>
 
      {/* PROPERTY MODAL */}
      {selectedProperty && (
        <div className="modal-overlay" onClick={() => setSelectedProperty(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img className="modal-image" src={selectedProperty.image} alt={selectedProperty.title} />
            <div className="modal-body">
              <div className="modal-header">
                <div className="modal-title">{selectedProperty.title}</div>
                <button className="modal-close" onClick={() => setSelectedProperty(null)}>✕</button>
              </div>
              <div className="modal-price">{selectedProperty.price}</div>
              <div className="modal-details">
                <div className="detail-item">
                  <div className="detail-label">Location</div>
                  <div className="detail-value">📍 {selectedProperty.location}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Type</div>
                  <div className="detail-value">{selectedProperty.category} · {selectedProperty.type}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Bedrooms</div>
                  <div className="detail-value">🛏 {selectedProperty.beds} Bedrooms</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Bathrooms</div>
                  <div className="detail-value">🚿 {selectedProperty.baths} Bathrooms</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Area</div>
                  <div className="detail-value">📐 {selectedProperty.sqft} sq.ft</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Status</div>
                  <div className="detail-value">
                    <span className={`prop-status ${selectedProperty.status === "Available" ? "status-available" : "status-sold"}`}>
                      {selectedProperty.status}
                    </span>
                  </div>
                </div>
              </div>
              <button className="contact-btn">📞 Contact Agent</button>
              <button
                className="contact-btn"
                style={{ marginTop: 10, background: wishlist.includes(selectedProperty.id) ? "#fee2e2" : "var(--cream)", color: wishlist.includes(selectedProperty.id) ? "#b91c1c" : "var(--dark)" }}
                onClick={() => toggleWishlist(selectedProperty.id)}
              >
                {wishlist.includes(selectedProperty.id) ? "💔 Remove from Wishlist" : "❤️ Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
 
export default App
