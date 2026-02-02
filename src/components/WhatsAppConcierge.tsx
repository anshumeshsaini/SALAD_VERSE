import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export const WhatsAppConcierge = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [quickMessage, setQuickMessage] = useState("");

  const quickMessages = [
    "I'd like to learn more about your plans",
    "Schedule a consultation",
    "I have a dietary question",
  ];

  const handleSendMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(
      message || "Hello! I'm interested in the Royal Salad experience. 🥗"
    );
    window.open(`https://wa.me/919045454741?text=${encodedMessage}`, "_blank");
    setIsExpanded(false);
    setQuickMessage("");
  };

  return (
    <>
      {/* Backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              className="bg-white rounded-3xl shadow-elevated border border-border overflow-hidden w-80"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Header */}
              <div className="bg-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-cream text-sm">Your Concierge</p>
                    <p className="text-xs text-cream/60">Mon–Sat • Replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-cream/60 hover:text-cream transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  How may we assist you today?
                </p>

                {/* Quick Messages */}
                <div className="space-y-2 mb-4">
                  {quickMessages.map((msg, i) => (
                    <motion.button
                      key={i}
                      onClick={() => handleSendMessage(msg)}
                      className="w-full text-left px-4 py-3 rounded-xl bg-cream hover:bg-cream-dark text-sm text-primary transition-all duration-200"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Message */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={quickMessage}
                    onChange={(e) => setQuickMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-xl bg-cream text-sm focus:outline-none focus:ring-2 focus:ring-gold/30"
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage(quickMessage)}
                  />
                  <motion.button
                    onClick={() => handleSendMessage(quickMessage)}
                    className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-primary-dark"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="relative"
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {isTooltipVisible && (
                  <motion.div
                    className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <div className="bg-primary text-cream text-sm px-4 py-2 rounded-xl shadow-elevated">
                      Your personal salad concierge
                      <div className="absolute -bottom-1 right-6 w-2 h-2 bg-primary rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Button */}
              <motion.button
                onClick={() => setIsExpanded(true)}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-elevated flex items-center justify-center relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(37, 211, 102, 0.3)",
                    "0 0 40px rgba(37, 211, 102, 0.5)",
                    "0 0 20px rgba(37, 211, 102, 0.3)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <MessageCircle className="w-7 h-7" />
                
                {/* Pulse Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-400"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
