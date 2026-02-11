import { MessageCircle } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function WhatsAppButton() {
  const { settings } = useSite();
  const whatsappNumber = settings.whatsappNumber.replace(/\D/g, "");
  const message = encodeURIComponent(`Hello! I'm interested in your services at ${settings.siteName}.`);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
        Chat with us!
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white rotate-45 border-b border-r border-slate-100" />
      </div>
      <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:scale-110 transition-transform">
        <MessageCircle size={30} fill="currentColor" />
      </div>
    </a>
  );
}
