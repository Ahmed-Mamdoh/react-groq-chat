import { chatWithGroq } from "@/api/groqApi";
import { useEffect, useRef, useState } from "react";

export type UseChatProps = {
  apiKey: string;
  systemPrompt: string;
  assistantFirstMessage: string;
};

function useChat({
  apiKey,
  systemPrompt,
  assistantFirstMessage,
}: UseChatProps) {
  const models = [
    "openai/gpt-oss-120b",
    "llama-3.3-70b-versatile",
    "moonshotai/kimi-k2-instruct-0905",
    "meta-llama/llama-4-maverick-17b-128e-instruct",
    "meta-llama/llama-4-scout-17b-16e-instruct",
    "groq/compound",
    "openai/gpt-oss-20b",
    "openai/gpt-oss-safeguard-20b",
    "llama-3.1-8b-instant",
    "groq/compound-mini",
    "meta-llama/llama-guard-4-12b",
    "meta-llama/llama-prompt-guard-2-86m",
    "meta-llama/llama-prompt-guard-2-22m",
  ];
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: systemPrompt,
    },
    {
      role: "assistant",
      content: assistantFirstMessage,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const modelNumber = useRef(0);

  useEffect(() => {
    // Scroll to the bottom of the messages container
    messagesRef?.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  function handleSendMessage(text = "") {
    const messageContent = typeof text === "string" ? text : "";
    if (!input.trim() && !messageContent.trim()) return;

    const userMessage = { role: "user", content: input || messageContent };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    chatWithGroq({
      model: models[modelNumber.current],
      messages: newMessages,
      apiKey: apiKey,
    })
      .then((res) => {
        if (res === "error") {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: "Sorry, I encountered an error. Please try again.",
            },
          ]);
          modelNumber.current++;
          if (modelNumber.current >= models.length) {
            modelNumber.current = 0;
          }
        } else {
          setMessages((prev) => [...prev, res]);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return {
    messages,
    input,
    setInput,
    handleSendMessage,
    messagesRef,
    isLoading,
  };
}

export default useChat;
