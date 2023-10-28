"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";

import axios from "axios";
import { toast } from "react-toastify";

import useEdit from "../hooks/useEditModal";
import TextAreaForm from "../input/TextAreaForm";
import Modal from "./Modal";
import ImageUpload from "../input/ImageUpload";

import { SafeUser } from "@/app/types";

interface EditModalProps {
  user: SafeUser;
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
      id: user.id,
      bio: user.bio,
      coverImage: user.coverImage,
      profileImage: user.profileImage,
    },
  });

  const bio = watch("bio");
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
      .patch("/api/edit", data)
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
      <TextAreaForm
        id="bio"
        label="Body"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={bio}
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
