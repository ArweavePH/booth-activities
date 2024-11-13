"use client";

import { Block, GradientLine, Timer, Title } from "@/components";
import { useFetchQuestions } from "@/hooks/useFetchQuestions";
import { IBlockResponse } from "@/lib/types";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [chainedBlocks, setChainedBlocks] = useState<number>(0);
  const { data: blocks, isLoading } = useFetchQuestions();
  const { width: confettiWidth, height: confettiHeight } = useWindowSize();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (hasStarted && timeLeft > 0 && !isLoading) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [hasStarted, timeLeft, isLoading]);

  const handleStart = () => {
    // TODO: Fetch the 3 questions and options from AO

    setHasStarted(true);
    setTimeLeft(60); // Reset timer when starting
  };

  const handleChained = () => {
    setChainedBlocks((prev) => prev + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pb-32 md:pb-16 bg-white bg-[url('/bg-lines.png')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="fixed top-0 left-0 w-full h-full bg-white opacity-70 z-0" />
      <GradientLine className="mb-8 z-20 fixed" />
      <div className="flex flex-col items-center p-8 gap-8 z-10">
        <div className="flex flex-col gap-2 mt-8 md:mt-0">
          <Title>Chain The Blocks</Title>
          <div className="text-sm text-center">
            In <span className="font-bold">60 seconds</span>, answer each block
            to chain them and win a prize!
          </div>
        </div>

        {!hasStarted ? (
          <div className="mt-8 flex flex-col gap-6 text-center h-full">
            <div className="text-4xl font-bold">Are you ready?</div>
            <button
              onClick={handleStart}
              className="bg-blue-700 hover:bg-blue-600 uppercase font-bold text-white px-6 py-4 rounded-lg"
            >
              Start
            </button>
          </div>
        ) : isLoading || !blocks ? (
          <div className="mt-8 flex flex-col gap-6 text-center h-full">
            <div className="text-2xl font-bold">Loading the blocks...</div>
          </div>
        ) : timeLeft > 0 && chainedBlocks < 3 && !isLoading && !!blocks ? (
          <div className="flex flex-col gap-8 items-center w-full">
            <div className="flex justify-center items-center gap-4 w-full">
              <Timer timeLeft={timeLeft} />
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {blocks.map((q: IBlockResponse, index: number) => (
                <Block
                  key={q.Question}
                  isLast={index === 2}
                  timeLeft={timeLeft}
                  block={q}
                  onChained={handleChained}
                />
              ))}
            </div>
          </div>
        ) : timeLeft === 0 && chainedBlocks < 3 ? (
          <div className="text-center text-2xl font-bold p-8 rounded-lg bg-red-600 text-white mt-16">
            Oh no! Time&apos;s up!
          </div>
        ) : chainedBlocks === 3 ? (
          <>
            <div className="z-30">
              <Confetti
                numberOfPieces={500}
                gravity={0.1}
                height={confettiHeight}
                width={confettiWidth}
              />
            </div>
            <div className="text-center text-2xl font-bold p-8 rounded-lg bg-green-600 text-white mt-16">
              You won! Go ahead and claim your prize!
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}
