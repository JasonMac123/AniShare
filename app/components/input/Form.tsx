"use client";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import getCurrentUser from "@/app/functions/getCurrentUser";
import useLogin from "../hooks/useLoginModal";
import useRegister from "../hooks/useRegisterModal";

import InputForm from "./InputForm";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const loginModal = useLogin();
  const registerModal = useRegister();

  const user = getCurrentUser();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      body: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/posts", data)
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
    <div>
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
  );
};

export default Form;
