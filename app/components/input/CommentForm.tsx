"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useLogin from "../hooks/useLoginModal";

import InputForm from "./InputForm";
import Button from "./Button";
import { SafeUser } from "@/app/types";
import Avatar from "../user/Avatar";

interface FormProps {
  user: SafeUser | null;
}

const Form: React.FC<FormProps> = ({ user }) => {
  const loginModal = useLogin();

  const [loading, setLoading] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      body: "",
    },
  });

  const body = watch("body");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (!user) {
      toast("Please log in");
      loginModal.onOpen();
      return;
    }

    setLoading(true);

    axios
      .post("/api/comments", { ...data, postId: data.id, userId: user.id })
      .then(() => {
        toast("Comment Created");
      })
      .catch((error) => {
        toast(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        <div>
          {user ? (
            <Avatar userId={user.id} userImage={user.profileImage} />
          ) : (
            <Avatar />
          )}
        </div>
        <div className="w-full space-y-4">
          <InputForm
            id="body"
            label="Body"
            type="text"
            disabled={loading}
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-end">
        <Button
          label="Comment"
          disabled={loading || !body}
          onClick={handleSubmit(onSubmit)}
          large
        />
      </div>
    </>
  );
};

export default Form;
