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
        className={`fixed right-[${triggerRightPosition}px] ${triggerImg ? "" : "h-14 w-14"} bottom-[${triggerBottomPosition}px] z-10 cursor-pointer rounded-full bg-[${triggerColor}] p-1 shadow-lg transition-all hover:scale-110 hover:bg-[${triggerColor}]/90 active:scale-95`}
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
