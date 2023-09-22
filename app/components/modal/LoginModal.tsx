"use client";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

import Modal from "./Modal";
import InputForm from "../input/InputForm";
import Button from "../input/Button";

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

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <div className="text-neutral-600 flex-row flex gap-3">
        <div>Don't have an account yet?</div>
        <div className="cursor-pointer hover:underline hover:text-neutral-400">
          Register!
        </div>
      </div>
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
