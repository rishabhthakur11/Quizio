"use client";
import { useQuiz } from "@/context/QuizContext";
import React, { FC } from "react";

interface AnswerProps {
  index: number;
  choice: string;
  type: string;
  selectedAnswer: string[];
  question: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Answer: FC<AnswerProps> = ({
  index,
  choice,
  type,
  selectedAnswer,
  question,
  onChange,
}) => {
  const label = String.fromCharCode(65 + index);
  const { result } = useQuiz();
  const idx = result.findIndex((resultObj) => resultObj.question === question);
  const currentAns = result[idx];
  return (
    <div
      className={`${
        currentAns.selectedAnswer.includes(choice)
          ? "border-green-400 bg-black text-green-400"
          : "bg-black text-dark"
      } font-semibold text-dark rounded-md mt-[13px] md:mt-[14px] cursor-pointer ease-in`}
      key={index}
    >
      <label className="p-4 flex cursor-pointer">
        <span className="mr-2">{label}.</span>
        <input
          name={choice}
          type={type === "MAQs" ? "checkbox" : "radio"}
          checked={selectedAnswer.includes(choice)}
          onChange={onChange}
          className="hidden"
        />
        {choice}
      </label>
    </div>
  );
};

export default Answer;
