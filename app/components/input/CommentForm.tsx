"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useLogin from "../hooks/useLoginModal";

import Button from "./Button";
import TextAreaForm from "./TextAreaForm";
import Avatar from "../user/Avatar";

import { SafeUser } from "@/app/types";

interface CommentFormProps {
  user: SafeUser | null;
  postId: string;
  authorId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({
  user,
  postId,
  authorId,
}) => {
  const router = useRouter();
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
      .post("/api/comment", {
        ...data,
        postId,
        userId: user.id,
        authorId: authorId,
      })
      .then(() => {
        toast("Comment Created");
        router.refresh();
      })
      .catch((error) => {
        toast(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="border-b-[1px] border-black">
      <div className="flex flex-row gap-4 p-8 pb-2">
        <div>
          {user ? (
            <Avatar userId={user.id} userImage={user.profileImage} />
          ) : (
            <Avatar />
          )}
        </div>
        <div className="w-full space-y-4">
          <TextAreaForm
            id="body"
            label="Body"
            disabled={loading}
            register={register}
            errors={errors}
            required
            value={body}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-end mr-6 pb-4">
        <Button
          label="Comment"
          disabled={loading || !body}
          onClick={handleSubmit(onSubmit)}
          large
        />
      </div>
    </div>
  );
};

export default CommentForm;
