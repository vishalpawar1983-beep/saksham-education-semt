import { Phone, Mail, MapPin } from 'lucide-react';
import { site } from '../../data/site';

export default function TopBar() {
  return (
    <div className="hidden bg-ink text-white/80 lg:block">
      <div className="container flex items-center justify-between py-2.5 text-sm">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-secondary" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4 text-secondary" />
            {site.email}
          </a>
        </div>
        <div className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-secondary" />
          <span>{site.address.line1}, {site.address.line2}, {site.address.state} – {site.address.pin}</span>
        </div>
      </div>
    </div>
  );
}
