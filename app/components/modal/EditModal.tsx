"use client";

import { useState } from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";

import useEdit from "../hooks/useEditModal";
import axios from "axios";
import { toast } from "react-toastify";

interface EditModalProps {
  userId?: string;
}

const Editmodal: React.FC<EditModalProps> = ({ userId }) => {
  const editModal = useEdit();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      bio: "",
      coverImage: "",
      profileImage: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .patch("/api/edit", {
        ...data,
        id: userId,
      })
      .then(() => {
        editModal.onClose();
      })
      .catch((error) => {
        toast("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <div></div>;
};

export default Editmodal;
