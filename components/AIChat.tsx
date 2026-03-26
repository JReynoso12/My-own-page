"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPaperAirplane, HiSparkles, HiChat } from "react-icons/hi";

type MessageSender = "bot" | "user";

interface ChatMessage {
  id: number;
  sender: MessageSender;
  text: string;
}

const steps = [
  "Great to meet you! What's your name?",
  "Nice! What's the best email to reach you?",
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
        text: "Hi, I'm your AI booking assistant. I can help you schedule a service with Jimuel.",
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
      // Submit booking - derive answers from messages
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
            text: "Thanks! I've sent your booking request to Jimuel's inbox. You'll receive a reply at your email address.",
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
    <div className="anime-glass-card p-4 sm:p-5 md:p-6 h-72 sm:h-80 md:h-96 flex flex-col min-h-0">
      {/* Header with anime styling */}
      <div className="flex items-center gap-2 mb-2">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 rounded-lg bg-gradient-to-r from-anime-cyan to-anime-purple flex items-center justify-center"
        >
          <HiSparkles className="w-4 h-4 text-white" />
        </motion.div>
        <div>
          <h3 className="text-lg font-bold font-display text-anime-cyan">
            AI Booking Assistant
          </h3>
        </div>
      </div>

      <p className="text-xs text-glass-muted mb-3">
        Answer a few quick questions and I&apos;ll send your request directly to
        Jimuel&apos;s email.
      </p>

      {/* Progress indicator */}
      <div className="flex items-center gap-1 mb-3">
        {steps.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 rounded-full flex-1"
            initial={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            animate={{
              backgroundColor: i <= stepIndex 
                ? i === steps.length - 1 && stepIndex === steps.length - 1 
                  ? "#34D399"
                  : "#22D3EE"
                : "rgba(255,255,255,0.1)"
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      {/* Messages container */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto space-y-2 pr-1 mb-3"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[85%] text-sm px-3 py-2.5 rounded-2xl ${
                msg.sender === "bot"
                  ? "bg-white/10 border border-white/20 backdrop-blur-xl text-glass-secondary rounded-2xl"
                  : "ml-auto bg-gradient-to-r from-anime-pink to-anime-purple text-white shadow-anime-pink"
              }`}
            >
              {msg.sender === "bot" && (
                <span className="inline-flex items-center gap-1 text-anime-cyan text-xs font-bold mb-1">
                  <HiChat className="w-3 h-3" />
                  AI
                </span>
              )}
              <p className={msg.sender === "bot" ? "pl-4" : ""}>{msg.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isSending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1 text-glass-muted text-xs pl-2"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
              className="w-1.5 h-1.5 rounded-full bg-anime-cyan"
            />
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
              className="w-1.5 h-1.5 rounded-full bg-anime-purple"
            />
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-anime-pink"
            />
            <span className="ml-1">Sending...</span>
          </motion.div>
        )}
      </div>

      {/* Input area */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="aichat-input flex-1 min-w-0 rounded-full px-4 py-2.5 text-sm border border-white/25 
            placeholder:text-slate-400 focus:outline-none focus:border-anime-pink focus:ring-2 
            focus:ring-anime-pink/30 transition-all"
          style={{
            background: "rgba(15, 23, 42, 0.9)",
            color: "#f1f5f9",
            caretColor: "#FF6B9D",
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
        <motion.button
          aria-label="Send message"
          onClick={handleSend}
          disabled={isSending}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2.5 rounded-full bg-gradient-to-r from-anime-pink to-anime-purple text-white transition-all 
            disabled:opacity-60 hover:shadow-anime-pink"
        >
          <motion.div
            animate={isSending ? { x: [0, 50, 0], opacity: [1, 0, 1] } : {}}
            transition={{ duration: 1, repeat: isSending ? Infinity : 0 }}
          >
            <HiPaperAirplane className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
