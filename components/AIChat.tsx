"use client";

import { useEffect, useRef, useState } from "react";
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

/** Extract booking answers from user messages (in order: name, email, service, date, details) */
function getAnswersFromMessages(
  messages: ChatMessage[],
  currentUserText: string
): { name: string; email: string; service: string; preferredDate: string; details: string } {
  const userTexts = [
    ...messages.filter((m) => m.sender === "user").map((m) => m.text),
    currentUserText,
  ];
  return {
    name: userTexts[0] ?? "",
    email: userTexts[1] ?? "",
    service: userTexts[2] ?? "",
    preferredDate: userTexts[3] ?? "",
    details: userTexts[4] ?? "",
  };
}

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

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

  // Auto-scroll to latest message whenever messages change
  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isSending) return;

    const text = input.trim();
    setInput("");

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text },
    ]);

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
      // Submit booking - derive answers from messages (avoids race/stale data)
      setIsSending(true);
      const allMessages = [...messages, { id: Date.now(), sender: "user" as const, text }];
      const conversationTranscript = allMessages
        .map((m) => (m.sender === "bot" ? `AI: ${m.text}` : `You: ${m.text}`))
        .join("\n");

      const { name, email, service, preferredDate, details } = getAnswersFromMessages(messages, text);

      try {
        const res = await fetch("/api/book-service", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            service,
            preferredDate,
            message: details,
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
    <div className="glass-card p-4 sm:p-5 md:p-6 h-72 sm:h-80 md:h-96 flex flex-col rounded-2xl min-h-0">
      <h3 className="text-lg font-semibold mb-2 text-neon-blue">
        AI Booking Assistant
      </h3>
      <p className="text-xs text-glass-muted mb-3">
        Answer a few quick questions and Ill send your request directly to
        Jimuels email.
      </p>

      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto space-y-2 pr-1 mb-3"
      >
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
                  ? "bg-white/15 border border-white/25 backdrop-blur-xl text-glass-secondary rounded-2xl"
                  : "ml-auto bg-neon-blue text-white"
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
          className="aichat-input flex-1 min-w-0 rounded-full px-4 py-2.5 text-sm border border-white/25 placeholder:text-slate-400 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/50 transition-all"
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            color: "#f1f5f9",
            caretColor: "#007AFF",
          }}
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
          className="p-2.5 rounded-full btn-active text-white transition-all disabled:opacity-60 hover:shadow-[0_4px_20px_rgba(0,122,255,0.5)]"
        >
          <HiPaperAirplane className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

