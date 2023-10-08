"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";

import axios from "axios";
import { toast } from "react-toastify";

import useEdit from "../hooks/useEditModal";
import InputForm from "../input/InputForm";
import Modal from "./Modal";
import ImageUpload from "../input/ImageUpload";

import { safeUser } from "@/app/types";

interface EditModalProps {
  user: safeUser | null;
}

const Editmodal: React.FC<EditModalProps> = ({ user }) => {
  const editModal = useEdit();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: user?.name,
      bio: user?.bio,
      coverImage: user?.coverImage,
      profileImage: user?.profileImage,
    },
  });

  const coverImage = watch("coverImage");
  const profileImage = watch("profileImage");

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
      .patch("/api/edit", {
        ...data,
        id: user?.id,
      })
      .then(() => {
        editModal.onClose();
        router.refresh();
      })
      .catch((error) => {
        toast("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        label="Cover Image"
        value={coverImage}
        onChange={(value) => {
          setFormValue("coverImage", value);
        }}
      />
      <ImageUpload
        label="Profile Image"
        value={profileImage}
        onChange={(value) => {
          setFormValue("profileImage", value);
        }}
      />
      <InputForm
        id="username"
        label="Username"
        type="text"
        disabled={loading}
        register={register}
        errors={errors}
      />
      <InputForm
        id="bio"
        label="Bio"
        type="text"
        disabled={loading}
        register={register}
        errors={errors}
      />
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={editModal.isOpen}
      title="Edit Profile"
      actionLabel="Save"
      onClose={editModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default Editmodal;
