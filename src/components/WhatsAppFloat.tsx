import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/40728232176"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactează-ne pe WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: "#25D366" }} />
    </motion.a>
  );
}
