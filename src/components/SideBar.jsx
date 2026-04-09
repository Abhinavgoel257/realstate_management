

function SideBar(){
    
    
    return (
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
    )
}

export default  SideBar;