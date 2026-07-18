import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowDown
} from "lucide-react";

import { businessConfig } from "../config/businessConfig";
import { images } from "../data/images";

function Hero() {
  const whatsappAvailable = Boolean(businessConfig.whatsapp);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${images.hero})`
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          Family Restaurant · Sikar
        </div>

        <h1>
          Hotel Gurukripa
          <span>Resort & Family Restaurant</span>
        </h1>

        <p>
          {businessConfig.shortDescription}
        </p>

        <div className="hero-actions">

          <a
            href={`tel:${businessConfig.phone}`}
            className="primary-button"
          >
            <Phone size={19} />
            Call Now
          </a>

          {whatsappAvailable ? (
            <a
              href={`https://wa.me/${businessConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              <MessageCircle size={19} />
              WhatsApp Us
            </a>
          ) : (
            <a
              href="#contact"
              className="secondary-button"
            >
              <MessageCircle size={19} />
              WhatsApp Us
            </a>
          )}

          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="outline-button"
          >
            <MapPin size={19} />
            Get Directions
          </a>

        </div>

        <a href="#about" className="scroll-indicator">
          <span>Explore</span>
          <ArrowDown size={18} />
        </a>

      </div>
    </section>
  );
}

export default Hero;
