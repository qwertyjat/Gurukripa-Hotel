import {
  Phone,
  MessageCircle,
  MapPin
} from "lucide-react";

import { businessConfig } from "../config/businessConfig";

function MobileActionBar() {
  const whatsappAvailable = Boolean(businessConfig.whatsapp);

  return (
    <div className="mobile-action-bar">

      <a href={`tel:${businessConfig.phone}`}>
        <Phone size={19} />
        <span>Call</span>
      </a>

      {whatsappAvailable ? (
        <a
          href={`https://wa.me/${businessConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={19} />
          <span>WhatsApp</span>
        </a>
      ) : (
        <a href="#contact">
          <MessageCircle size={19} />
          <span>WhatsApp</span>
        </a>
      )}

      <a
        href={businessConfig.googleMapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MapPin size={19} />
        <span>Directions</span>
      </a>

    </div>
  );
}

export default MobileActionBar;
