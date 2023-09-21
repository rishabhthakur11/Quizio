import React, { FC } from "react";
import { addLeadingZero, formatTime } from "@/utilities/helpers";
import Counter from "./Counter";

interface QuizHeaderProps {
  activeQuestion: number;
  totalQuestions: number;
  timer: number;
}

const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  totalQuestions,
  timer,
}) => {
  return (
    <div className="flex justify-between space-x-6">
      <div>
        <span className="text-4xl font-semibold text-primary">
          {addLeadingZero(activeQuestion + 1)}
        </span>
        <span className="text-xl font-semibold text-dark">
          /{addLeadingZero(totalQuestions)}
        </span>
      </div>
      <div className="flex">
        <Counter time={`${formatTime(timer)}`} />
      </div>
    </div>
  );
};

export default QuizHeader;
