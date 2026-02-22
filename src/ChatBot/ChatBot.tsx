import * as PopoverPrimitive from "@radix-ui/react-popover";
import useChat from "./hooks/useChat";
import ChatTrigger from "./components/ChatTrigger";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

// Custom popover components to avoid shadcn dependency
const Popover = PopoverPrimitive.Root;
const PopoverContent = PopoverPrimitive.Content;

export type ChatBotProps = {
  apiKey: string;
  triggerColor?: string;
  triggerImg?: string;
  contentBgColor?: string;
  contentHeight?: number;
  contentWidth?: number;
  contentBorder?: number;
  contentBorderColor?: string;
  contentBorderRoundness?: number;
  textColor?: string;
  userMessageBgColor?: string;
  assistantMessageBgColor?: string;
  triggerRightPosition?: number;
  triggerBottomPosition?: number;
  contentRightPosition?: number;
  systemPrompt?: string;
  assistantFirstMessage?: string;
};

export function ChatBot({
  apiKey,
  triggerColor,
  triggerImg,
  contentBgColor = "#1a1a1a",
  contentHeight = 500,
  contentWidth = 350,
  contentBorder = 1,
  contentBorderColor = "#333333",
  textColor = "#ffffff",
  userMessageBgColor = "#007bff",
  assistantMessageBgColor = "#2d2d2d",
  triggerRightPosition = 24,
  triggerBottomPosition = 24,
  contentRightPosition = 24,
  systemPrompt = `You are a helpful AI assistant. Provide clear, concise, and accurate responses.`,
  assistantFirstMessage = "Hello! I'm here to help you. What can I assist you with today?",
  contentBorderRoundness = 16,
}: ChatBotProps) {
  const {
    messages,
    input,
    setInput,
    handleSendMessage,
    messagesRef,
    isLoading,
  } = useChat({ apiKey, systemPrompt, assistantFirstMessage });
  return (
    <Popover>
      <ChatTrigger
        triggerColor={triggerColor}
        triggerImg={triggerImg}
        triggerRightPosition={triggerRightPosition}
        triggerBottomPosition={triggerBottomPosition}
      />
      <PopoverContent
        className={`bg-[${contentBgColor}] mr-[${contentRightPosition}px] h-[${contentHeight}px] max-h-[${contentHeight}px] w-[${contentWidth}px] border-[${contentBorder}px] border-[${contentBorderColor}] text-[${textColor}] shadow-2xl ring-1 ring-white/10 rounded-[${contentBorderRoundness}px]`}
      >
        <div className="flex h-full flex-col gap-4 p-2">
          <div className="min-h-0 flex-1">
            <MessageList
              messages={messages}
              messagesRef={messagesRef}
              isLoading={isLoading}
              userMessageBgColor={userMessageBgColor}
              assistantMessageBgColor={assistantMessageBgColor}
            />
          </div>

          <div className="shrink-0 rounded-xl bg-black/40 p-2">
            <ChatInput
              handleSendMessage={handleSendMessage}
              input={input}
              setInput={setInput}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
