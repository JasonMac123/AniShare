"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useLogin from "../hooks/useLoginModal";
import useRegister from "../hooks/useRegisterModal";

import InputForm from "./InputForm";
import Button from "./Button";
import { SafeUser } from "@/app/types";
import ImageUpload from "./ImageUpload";
import Avatar from "../user/Avatar";

interface FormProps {
  isComment?: boolean;
  postId?: string;
  user: SafeUser | null;
}

const Form: React.FC<FormProps> = ({ isComment, postId, user }) => {
  const loginModal = useLogin();
  const registerModal = useRegister();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      body: "",
      image: "",
    },
  });

  const image = watch("image");
  const body = watch("body");
  const setFormValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/posts", { ...data })
      .then(() => {
        toast("Post Created");
      })
      .catch((error) => {
        toast(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {!user ? (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
            Welcome to AniShare
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-row gap-4">
            <div>
              <Avatar userId={user.id} userImage={user.profileImage} />
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
              <ImageUpload
                label="Image"
                value={image}
                onChange={(value) => {
                  setFormValue("image", value);
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-end">
            <Button
              label="Post"
              disabled={loading || !body}
              onClick={handleSubmit(onSubmit)}
              large
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
