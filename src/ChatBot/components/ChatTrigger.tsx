import { PopoverTrigger } from "@radix-ui/react-popover";

type ChatTriggerProps = {
  triggerColor?: string;
  triggerImg?: string;
  triggerRightPosition?: number;
  triggerBottomPosition?: number;
};

function ChatTrigger({
  triggerColor = "#111",
  triggerImg,
  triggerRightPosition = 24,
  triggerBottomPosition = 24,
}: ChatTriggerProps) {
  return (
    <PopoverTrigger asChild>
      <button
        className="fixed z-10 cursor-pointer rounded-full p-1 shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{
          right: `${triggerRightPosition}px`,
          bottom: `${triggerBottomPosition}px`,
          backgroundColor: triggerColor,
          width: triggerImg ? "auto" : "56px",
          height: triggerImg ? "auto" : "56px",
        }}
      >
        {triggerImg && (
          <img src={triggerImg} alt="Chat with chatbot" className="h-14 w-14" />
        )}
        {!triggerImg && <p className="text-white text-center text-xl">C</p>}
      </button>
    </PopoverTrigger>
  );
}

export default ChatTrigger;
