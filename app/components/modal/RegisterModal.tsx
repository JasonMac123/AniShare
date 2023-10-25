"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

import Modal from "./Modal";
import InputForm from "../input/InputForm";
import Button from "../input/Button";

import useLogin from "../hooks/useLoginModal";
import useRegister from "../hooks/useRegisterModal";

const RegisterModal = () => {
  const loginModal = useLogin();
  const registerModal = useRegister();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const redirectRegister = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/register", data)
      .then((data) => {
        if (data.data === "Duplicate Email") {
          toast(
            "Email is already being used by another account. Use another Email"
          );
          return;
        }

        if (data.data === "Duplicate UserName") {
          toast("Username is already taken. Use another Username");
          return;
        }

        registerModal.onClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
        id="username"
        label="Username"
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
        secondary
        fullWidth
        large
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <div className="text-white flex-row flex justify-center gap-3">
        <div>Already have an account?</div>
        <div
          onClick={redirectRegister}
          className="cursor-pointer hover:underline hover:text-neutral-400"
        >
          Login here!
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
