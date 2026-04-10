import { Squircle } from "@squircle-js/react";

export const AppButton = ({ text, onClick, className }: { text: string; onClick?: () => void; className?: string }) => {
  return (
      <Squircle cornerRadius={10} cornerSmoothing={1} asChild>
        <button
          onClick={onClick}
          className="bg-[#246050] text-white px-10 py-4 font-sans text-[18px] font-bold tracking-wider hover:opacity-80 active:scale-95 transition-all cursor-pointer"
        >
          {text}
        </button>
      </Squircle>
  );
};