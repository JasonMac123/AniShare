"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import Modal from "./Modal";
import InputForm from "../input/InputForm";
import Button from "../input/Button";

import useLogin from "../hooks/useLoginModal";
import useRegister from "../hooks/useRegisterModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const loginModal = useLogin();
  const registerModal = useRegister();
  const router = useRouter();
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

  const redirectRegister = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast("Logged In");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast(`${callback.error}`);
      }
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
        <div>Don't have an account yet?</div>
        <div
          onClick={redirectRegister}
          className="cursor-pointer hover:underline hover:text-neutral-400"
        >
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
      footer={footerContent}
    />
  );
};

export default LoginModal;
