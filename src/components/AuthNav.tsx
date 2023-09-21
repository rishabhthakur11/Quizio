"use client";
import { FC } from "react";
import { Button, Text } from "./ui";
import Link from "next/link";
interface AuthNavProps {}

const AuthNav: FC<AuthNavProps> = ({}) => {
  return (
    <>
      <div className="flex flex-1">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text text-transparent">
          Quizio
        </h1>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <Link
          target="_blank"
          className="flex gap-5 items-center "
          href={"https://www.linkedin.com/in/rishabhthakur11"}
        >
          <Button variant="primary" title={"Contact Us"} />
        </Link>
      </div>
    </>
  );
};

export default AuthNav;
