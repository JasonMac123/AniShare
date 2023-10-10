import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import getCurrentUser from "@/app/functions/getCurrentUser";
import useLogin from "../hooks/useLoginModal";
import useRegister from "../hooks/useRegisterModal";

import InputForm from "./InputForm";
import Button from "./Button";
import { safeUser } from "@/app/types";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
  user: safeUser | null;
}

const Form: React.FC<FormProps> = ({
  placeholder,
  isComment,
  postId,
  user,
}) => {
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
      )}
    </div>
  );
};

export default Form;
