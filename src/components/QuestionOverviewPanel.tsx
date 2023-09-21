"use client";
import React from "react";
import { useQuiz } from "@/context/QuizContext";

const QuestionOverviewPanel = () => {
  const {
    questions,
    activeQuestion,
    attemptedQuestions,
    handleQuestionClick,
    markedForReview,
  } = useQuiz();

  return (
    <div className="relative hidden md:block bg-buttonSecondary h-full p-8 text-primary">
      <h2 className="text-lg font-semibold mb-2">Question Overview</h2>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((question, index: number) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(index)}
            className={`p-2 rounded ${
              index === activeQuestion
                ? "bg-blue-500 text-white"
                : attemptedQuestions.includes(index)
                ? "bg-green-500 text-white"
                : markedForReview.includes(index)
                ? "bg-yellow-500 text-black"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="absolute bottom-2 flex flex-col items-start gap-2">
        <div className="current flex justify-center items-center gap-2">
          <div className="bg-blue-500 text-white p-2 rounded">1</div>
          <p className="text-primary"> Current Question</p>
        </div>
        <div className="attempted flex justify-center items-center gap-2">
          <div className="bg-green-500 text-white p-2 rounded">2</div>
          <p className="text-primary">Attempted Question</p>
        </div>
        <div className="review flex justify-center items-center gap-2">
          <div className="review bg-yellow-500 text-black p-2 rounded">3</div>
          <p className="text-primary">Marked for Review</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionOverviewPanel;
