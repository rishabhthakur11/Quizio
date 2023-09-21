import React, { FC } from "react";
import Answer from "../Answers";

interface QuestionTypes {
  question: string;
  type: string;
  choices: string[];
  selectedAnswer: string[];
  handleAnswerSelection: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const Question: FC<QuestionTypes> = ({
  question,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <div className="mt-30 mb-12  w-full mx-auto">
      <h2 className="font-semibold text-md md:text2xl mt-10 mb-6 text-primary">
        {question}
      </h2>
      <div className="max-w-78% sm:max-w-full">
        {choices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            type={type}
            selectedAnswer={selectedAnswer}
            question={question}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
