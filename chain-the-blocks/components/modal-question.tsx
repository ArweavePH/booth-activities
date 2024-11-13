"use client";

import { useState } from "react";
import { ModalOption } from "./modal-option";
import { Timer } from "./timer";

interface IModalQuestion {
  question: string;
  options: string[];
  answer: number;
  onClose: () => void;
  timeLeft: number;
  onCorrectAnswer: () => void;
}

export const ModalQuestion = ({
  question,
  options,
  answer,
  onClose,
  timeLeft,
  onCorrectAnswer,
}: IModalQuestion) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedOption(event.currentTarget.value);
  };

  const handleOptionCancel = () => {
    setSelectedOption(null);
  };

  const handleOptionConfirm = () => {
    if (selectedOption === options[answer - 1]) {
      onCorrectAnswer();
      onClose();
    } else {
      alert("Incorrect answer. Try again!");
      setSelectedOption(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-blue-800 w-full h-full px-12 py-8 pb-40 md:pb-12 relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-4 py-2 bg-gray-200 rounded"
        >
          Back
        </button>
        {/* Modal question content will go here */}
        <div className="flex flex-col gap-8 mt-16 relative">
          <Timer
            timeLeft={timeLeft}
            className="absolute -top-8 right-0 left-0 mx-auto"
          />
          <div className="text-xl text-black text-center h-80 border-gray-800 border-2 bg-gray-100 flex justify-center items-center p-8 rounded-xl">
            {question}
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4">
            {options.map((option) => (
              <button
                key={option}
                value={option}
                onClick={handleOptionClick}
                className="text-left bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 rounded-xl px-8 py-4 w-full md:w-[49%] min-h-24 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        {/* Add confirmation modal */}
        {selectedOption && (
          <ModalOption
            value={selectedOption}
            onConfirm={handleOptionConfirm}
            onCancel={handleOptionCancel}
          />
        )}
      </div>
    </div>
  );
};
