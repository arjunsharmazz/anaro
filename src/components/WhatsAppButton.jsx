import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const whatsappUrl =
  'https://wa.me/919999999999?text=Hi%20Anaro%2C%20I%20want%20help%20with%20my%20order.';

function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,211,102,0.28)] backdrop-blur-sm transition hover:shadow-[0_24px_70px_rgba(37,211,102,0.4)] sm:bottom-6 sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <MessageCircle size={20} />
      </span>
      <span className="hidden pr-1 sm:inline">Chat on WhatsApp</span>
    </motion.a>
  );
}

export default WhatsAppButton;