"use client";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Modal from "./Modal";
import InputForm from "../input/InputForm";

import useLogin from "../hooks/useLoginModal";

const LoginModal = () => {
  const loginModal = useLogin();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <InputForm
        id="email"
        label="Email"
        type="text"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <InputForm
        id="password"
        label="Password"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default LoginModal;
