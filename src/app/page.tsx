"use client";
import AuthNav from "@/components/AuthNav";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import EmailForm from "@/components/EamilForm";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);
  return (
    <>
      <main>
        {isLoading && isHome ? (
          <SplashScreen />
        ) : (
          <>
            <div className="w-screen h-screen flex flex-col">
              <div className="bg-black flex justify-between container mx-auto p-10">
                <AuthNav />
              </div>
              <div className="flex items-center justify-center w-screen h-screen">
                <EmailForm />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
