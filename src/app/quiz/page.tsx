import AuthNav from "@/components/AuthNav";
import QuizDetailCard from "@/components/QuizDetailCard";

import React from "react";

type Props = {};

const QuizDetails = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-black">
      <div className="bg-black flex justify-between container mx-auto p-10">
        <AuthNav />
      </div>
      <div className="mx-auto flex w-screen h-screen items-center justify-center p-2">
        <div className="h-fit md:w-1/2 w-full rounded-md bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] p-1">
          <div className="flex items-center justify-center h-full w-full bg-black py-10">
            <QuizDetailCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
