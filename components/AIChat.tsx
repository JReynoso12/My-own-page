"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi";

type MessageSender = "bot" | "user";

interface ChatMessage {
  id: number;
  sender: MessageSender;
  text: string;
}

const steps = [
  "Great to meet you! Whats your name?",
  "Nice! Whats the best email to reach you?",
  "What service are you interested in booking?",
  "When would you like to schedule it? (date & time, or timeframe)",
  "Any extra details or goals I should know about?",
];

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const answers = useMemo(
    () => ({
      name: "",
      email: "",
      service: "",
      preferredDate: "",
      details: "",
    }),
    []
  );

  useEffect(() => {
    // Initial greeting
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Hi, Im your AI booking assistant. I can help you schedule a service with Jimuel.",
      },
      {
        id: Date.now() + 1,
        sender: "bot",
        text: steps[0],
      },
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isSending) return;

    const text = input.trim();
    setInput("");

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text },
    ]);

    // Store answer based on current step
    if (stepIndex === 0) {
      (answers as any).name = text;
    } else if (stepIndex === 1) {
      (answers as any).email = text;
    } else if (stepIndex === 2) {
      (answers as any).service = text;
    } else if (stepIndex === 3) {
      (answers as any).preferredDate = text;
    } else if (stepIndex === 4) {
      (answers as any).details = text;
    }

    // Move to next step or submit
    if (stepIndex < steps.length - 1) {
      const nextIndex = stepIndex + 1;
      setStepIndex(nextIndex);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            sender: "bot",
            text: steps[nextIndex],
          },
        ]);
      }, 400);
    } else {
      // Submit booking
      setIsSending(true);
      const conversationTranscript = [...messages, { id: Date.now(), sender: "user", text }]
        .map((m) => (m.sender === "bot" ? `AI: ${m.text}` : `You: ${m.text}`))
        .join("\n");

      try {
        const res = await fetch("/api/book-service", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: (answers as any).name,
            email: (answers as any).email,
            service: (answers as any).service,
            preferredDate: (answers as any).preferredDate,
            message: (answers as any).details,
            conversation: conversationTranscript,
          }),
        });

        if (!res.ok) {
          throw new Error("Request failed");
        }

        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 3,
            sender: "bot",
            text: "Thanks! Ive sent your booking request to Jimuels inbox. Youll receive a reply at your email address.",
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 3,
            sender: "bot",
            text: "Something went wrong while sending your request. Please try again later or contact directly via email or social links.",
          },
        ]);
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="neon-glass-card p-4 md:p-5 h-80 md:h-96 flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-neon-blue">
        AI Booking Assistant
      </h3>
      <p className="text-xs text-slate-300 mb-3">
        Answer a few quick questions and Ill send your request directly to
        Jimuels email.
      </p>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 mb-3">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className={`max-w-[85%] text-sm px-3 py-2 rounded-2xl ${
                msg.sender === "bot"
                  ? "bg-slate-900/80 border border-slate-700/70 text-slate-100"
                  : "ml-auto bg-neon-blue text-black"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 bg-slate-900/80 border border-slate-700/70 rounded-full px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-blue"
          placeholder={
            isSending
              ? "Sending your request..."
              : "Type your answer and press Enter"
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isSending}
        />
        <button
          aria-label="Send message"
          onClick={handleSend}
          disabled={isSending}
          className="p-2 rounded-full bg-neon-blue text-black hover:bg-neon-blue/80 transition disabled:opacity-60"
        >
          <HiPaperAirplane className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

