import {
  Phone,
  MapPin,
  Navigation
} from "lucide-react";

import { businessConfig } from "../config/businessConfig";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            Hotel Gurukripa
          </h2>

          <p>
            Resort & Family Restaurant
          </p>

          <span>
            {businessConfig.shortDescription}
          </span>
        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <a href={`tel:${businessConfig.phone}`}>
            <Phone size={17} />
            {businessConfig.phone}
          </a>

          <div className="footer-address">
            <MapPin size={17} />
            <span>{businessConfig.address}</span>
          </div>

        </div>

        <div className="footer-column">

          <h3>Location</h3>

          <a
            href={businessConfig.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={17} />
            Get Directions
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {businessConfig.name}
        </p>

        <p>
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
