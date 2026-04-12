import { createContext, useContext, useReducer, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info, X } from "lucide-react";

// --- Context ---
const ToastContext = createContext(null);

let toastId = 0;

function toastReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.toast];
    case "REMOVE":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

export function ToastProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const addToast = useCallback((message, type = "info") => {
    const id = ++toastId;
    dispatch({ type: "ADD", toast: { id, message, type } });
    // Auto dismiss sau 4s
    setTimeout(() => dispatch({ type: "REMOVE", id }), 4000);
  }, []);

  const toast = {
    success: (msg) => addToast(msg, "success"),
    error: (msg) => addToast(msg, "error"),
    info: (msg) => addToast(msg, "info"),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast container — fixed bottom right */}
      <div className="fixed right-4 bottom-4 z-[9999] flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((t) => (
            <ToastItem
              key={t.id}
              toast={t}
              onClose={() => dispatch({ type: "REMOVE", id: t.id })}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

// --- Toast Item ---
const icons = {
  success: <CheckCircle2 size={18} className="text-accent" />,
  error: <XCircle size={18} className="text-red-400" />,
  info: <Info size={18} className="text-accent/70" />,
};

const borderColors = {
  success: "border-accent/30",
  error: "border-red-400/30",
  info: "border-accent/20",
};

function ToastItem({ toast, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 80 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-lg ${
        borderColors[toast.type]
      }`}
    >
      {icons[toast.type]}
      <span className="text-sm">{toast.message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-muted hover:text-foreground"
        aria-label="Close notification"
      >
        <X size={14} />
      </button>
    </motion.div>
  );
}
