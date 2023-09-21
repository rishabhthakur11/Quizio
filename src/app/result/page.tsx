"use client";
import { Button } from "@/components/ui";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";
import React from "react";

const ResultScreen = () => {
  const router = useRouter();
  const { result } = useQuiz();
  const onClickRetry = () => {
    router.push("/quiz");
  };

  return (
    <div className="bg-black w-screen h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto mt-16 md:mt-6 p-10">
        <div className="text-center mb-10 md:mb-3">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text text-transparent">
            Quizio
          </h1>
        </div>
        <div className="bg-[#7F7FD5] rounded-lg mx-auto mb-10 p-10 md:p-3">
          {/* ResultOverview */}
          {result.map(
            (
              {
                question,
                choices,
                correctAnswers,
                selectedAnswer,
                score,
                isMatch,
              },
              index
            ) => (
              <div key={question} className="mt-10 md:mt-4">
                {/* QuestionContainer */}
                <div className="w-90 md:w-full">
                  <div className="flex items-center justify-start">
                    <h6 className="font-normal text-lg md:text-base">{`${
                      index + 1
                    }. `}</h6>
                    <span className="font-semibold  text-lg md:text-base">
                      {question}
                    </span>
                  </div>
                  <div>
                    <ul>
                      {choices.map((ans, index) => {
                        // Convert index to alphabet character
                        const label = String.fromCharCode(65 + index);
                        const correct =
                          selectedAnswer.includes(ans) &&
                          correctAnswers.includes(ans);
                        const wrong =
                          selectedAnswer.includes(ans) &&
                          !correctAnswers.includes(ans);

                        return (
                          <li
                            key={ans}
                            className={`border border-gray-300 w-90 md:w-full rounded-lg p-4 font-semibold mt-3 ${
                              correct
                                ? "bg-green-100 border-green-500 text-black"
                                : ""
                            } ${
                              wrong
                                ? "bg-red-100 border-red-500 text-black"
                                : ""
                            }`}
                          >
                            <span className="mr-2">{label}.</span>
                            {ans}
                          </li>
                        );
                      })}
                    </ul>
                    {/* RightAnswer */}
                  </div>
                </div>
                <span
                  className={`font-semibold text-sm ${
                    isMatch ? "text-green-500" : "text-red-500"
                  } mt-2 md:mt-1`}
                >
                  {`Score ${isMatch ? score : 0}`}
                </span>
              </div>
            )
          )}
        </div>
        <div className="flex justify-end">
          <Button variant="primary" title="Retry" onClick={onClickRetry} />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
