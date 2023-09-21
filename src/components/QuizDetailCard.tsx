"use client";
import React from "react";
import { Button, Text } from "./ui";
import { useQuiz } from "@/context/QuizContext";
import { convertSeconds } from "@/utilities/helpers";
import { useRouter } from "next/navigation";

type Props = {};

function QuizDetailCard({}: Props) {
  const router = useRouter();
  const { quizDetails } = useQuiz();
  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } =
    quizDetails;
  const goToQuestionScreen = () => {
    router.push("/question");
  };

  return (
    <div className="flex flex-col md:gap-8 gap-5 items-start  rounded-md shadow-lg">
      <Text className="inline-block max-w-max text-4xl text-center font-bold text-center bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text text-transparent">
        Quiz Details
      </Text>
      <div className="flex flex-col gap-3">
        <Text variant="price" className="inline-block max-w-max">
          Selected Quiz Topics: {selectedQuizTopic}
        </Text>
        <Text variant="price" className="inline-block max-w-max">
          Total questions to attempt: {totalQuestions}
        </Text>
        <Text variant="price" className="inline-block max-w-max">
          Score in total: {totalScore}
        </Text>
        <Text variant="price" className="inline-block max-w-max">
          Total Time: {convertSeconds(totalTime)}
        </Text>
        <Text variant="price" className="inline-block max-w-max"></Text>
      </div>
      <div className="mt-10">
        <Button
          type="submit"
          variant="primary"
          title="Start Quiz"
          onClick={goToQuestionScreen}
        />
      </div>
    </div>
  );
}

export default QuizDetailCard;
