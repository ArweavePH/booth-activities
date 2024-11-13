"use client";

import { ModalQuestion } from "@/components";
import { IBlockResponse } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  Check as CheckIcon,
  LinkBreak as LinkBreakIcon,
  Link as LinkIcon,
  QuestionMark as QuestionMarkIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

interface IBlock {
  isLast: boolean;
  timeLeft: number;
  block: IBlockResponse;
  onChained: () => void;
}

export const Block = ({ isLast, timeLeft, block, onChained }: IBlock) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCorrectAnswer = () => {
    setIsAnswered(true);
    onChained();
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggleModal}
        className={cn(
          "w-48 h-48 bg-gray-50 flex items-center justify-center border-4 border-gray-300 border-dashed rounded-2xl mb-2 hover:bg-gray-100 hover:border-blue-500 transition-colors",
          isAnswered && "border-gray-800 border-4 bg-green-500"
        )}
        disabled={isAnswered}
      >
        {isAnswered ? (
          <CheckIcon className="w-24 h-24 text-gray-700" />
        ) : (
          <QuestionMarkIcon className="w-24 h-24 text-gray-700" />
        )}
      </button>
      {!isLast && (
        <div className="h-10 flex justify-center">
          {!isAnswered ? (
            <LinkBreakIcon className="w-12 h-12 text-gray-500" />
          ) : (
            <LinkIcon className="w-12 h-12 text-gray-700" />
          )}
        </div>
      )}

      {isModalOpen && (
        <ModalQuestion
          question={block.Question}
          options={block.Options}
          answer={block.Answer}
          onClose={handleToggleModal}
          timeLeft={timeLeft}
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}
    </div>
  );
};
