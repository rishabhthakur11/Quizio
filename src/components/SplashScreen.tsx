import React from "react";

type Props = {};

export default function SplashScreen({}: Props) {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-7xl font-bold text-center animate-pulse bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text text-transparent">
        Quizio
      </h1>
    </div>
  );
}
