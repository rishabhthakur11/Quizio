"use client";
import React, { FC, useEffect, useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import { useTimer } from "@/hooks/index";
import Button from "@/components/ui/Button";
import ModalWrapper from "@/components/ui/ModelWrapper";
import Question from "./Questions";
import QuizHeader from "./QuizHeader";
import CheckIcon from "@mui/icons-material/Check";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { useRouter } from "next/navigation";

const QuestionScreen: FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const router = useRouter();
  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
    activeQuestion,
    setActiveQuestion,
    attemptedQuestions,
    setAttemptedQuestions,
    handleMarkForReview,
    markedForReview,
    isChecked,
  } = useQuiz();

  const currentQuestion = questions[activeQuestion];

  const onClickNext = () => {
    const isMatch =
      selectedAnswer.length === currentQuestion.correctAnswers.length &&
      selectedAnswer.every((answer) =>
        currentQuestion.correctAnswers.includes(answer)
      );

    const idx = result.findIndex(
      (resultObj) => resultObj.question === currentQuestion?.question
    );
    if (selectedAnswer.length > 0) {
      result[idx] = {
        ...currentQuestion,
        selectedAnswer,
        isMatch,
        marked: true,
      };
    }
    if (!attemptedQuestions.includes(activeQuestion)) {
      setAttemptedQuestions([...attemptedQuestions, activeQuestion]);
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev: any) => prev + 1);
    } else {
      const timeTaken = quizDetails.totalTime - timer;
      setEndTime(timeTaken);
      setShowResultModal(true);
    }
    setSelectedAnswer([]);
  };

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (
      currentQuestion.type === "multiple" ||
      currentQuestion.type === "boolean"
    ) {
      if (checked) {
        setSelectedAnswer([name]);
      }
    }
  };

  const textVal = markedForReview.includes(activeQuestion)
    ? "Unmark"
    : "Mark for Review";

  const handleModal = () => {
    router.push("/result");
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = "hidden";
    }
  }, [showTimerModal, showResultModal]);

  useTimer(
    timer,
    quizDetails,
    setEndTime,
    setTimer,
    setShowTimerModal,
    showResultModal
  );

  return (
    <div>
      <div
        className={`h-screen bg-black rounded-md md:p-24 p-5 w-full mx-auto ${
          selectedAnswer.length > 0 ? "mb-70" : "mb-30"
        }`}
      >
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />
        <Question
          question={currentQuestion?.question}
          choices={currentQuestion?.choices}
          type={currentQuestion?.type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />

        <div className="flex items-center space-x-4 mb-4">
          <Button
            title={textVal}
            onClick={() => handleMarkForReview(activeQuestion)}
          />
          <Button
            title={activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            onClick={onClickNext}
            disabled={selectedAnswer.length === 0}
            variant="primary"
          />
        </div>
      </div>
      {showTimerModal || showResultModal ? (
        <ModalWrapper
          title={showResultModal ? "Done!" : "Your time is up!"}
          subtitle={`Total Questions Attempted: ${attemptedQuestions.length}`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <AccessAlarmIcon />}
          buttonTitle="SHOW RESULT"
        />
      ) : null}
    </div>
  );
};

export default QuestionScreen;
