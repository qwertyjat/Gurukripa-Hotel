import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { businessConfig } from "../config/businessConfig";
import { images } from "../data/images";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Restaurant", href: "#restaurant" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="site-header">
      <div className="header-container">

        <a href="#home" className="brand">
          <img
            src={images.logo}
            alt={`${businessConfig.name} logo`}
            className="brand-logo"
          />

          <div className="brand-text">
            <span className="brand-name">
              Hotel Gurukripa
            </span>

            <span className="brand-subtitle">
              Resort & Family Restaurant
            </span>
          </div>
        </a>

        <nav className={`desktop-navigation ${menuOpen ? "mobile-open" : ""}`}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${businessConfig.phone}`}
          className="header-call-button"
        >
          <Phone size={17} />
          <span>Call Now</span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Header;
