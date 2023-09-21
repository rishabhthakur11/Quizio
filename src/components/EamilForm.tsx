"use client";
import React, { FC, useEffect, useState } from "react";
import { Button, Input, Text } from "./ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

type Props = {};

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid Email" }),
});
export type IForm = z.infer<typeof schema>;

const EamilForm: FC<Props> = () => {
  const [emailList, setEmailList] = useState<any>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const storedEmails = localStorage.getItem("emails");
    if (storedEmails) {
      setEmailList(JSON.parse(storedEmails));
    }
  }, []);

  const router = useRouter();
  const onSubmitReady = async (data: IForm) => {
    if (data.email.trim() !== "") {
      // Add the new email to the list
      const updatedEmailList = [...emailList, data.email];
      setEmailList(updatedEmailList);

      // Store the updated email list in local storage
      localStorage.setItem("emails", JSON.stringify(updatedEmailList));

      // Clear the input field
      data.email = "";
      router.push("/quiz");
    }
  };
  return (
    <div className="flex flex-col md:gap-16 gap-5  rounded-md shadow-lg">
      <div className="flex flex-col gap-3 items-center">
        <Text className="inline-block max-w-max text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] bg-clip-text text-transparent">
          Welcome, To Quizio
        </Text>
        <Text className="inline-block max-w-max text-md font-normal text-center text-dark">
          Test your knowledge and win exciting prizes, with Quizio.
        </Text>
      </div>
      <form
        onSubmit={handleSubmit(onSubmitReady)}
        className="flex w-full flex-col gap-5"
      >
        <div>
          <div className="p-1 rounded-lg w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <Input
              variant="noBorder"
              placeholder="Email"
              register={register("email")}
              className="px-5 py-2 w-full rounded-lg focus:outline-none"
            />
          </div>
          {errors.email?.message && (
            <Text variant="error" className="ml-2 mt-2">
              {errors.email?.message}
            </Text>
          )}
        </div>
        <div className="flex">
          <Button type="submit" variant="primary" title="Start Quiz" />
        </div>
      </form>
    </div>
  );
};

export default EamilForm;
