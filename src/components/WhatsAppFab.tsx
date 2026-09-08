import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um especialista no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy text-white pl-4 pr-5 py-3.5 shadow-xl hover:bg-gold hover:text-navy transition-colors"
    >
      <MessageCircle size={20} />
      <span className="font-mono text-[11px] uppercase tracking-widest hidden sm:block">
        WhatsApp
      </span>
    </a>
  );
}
