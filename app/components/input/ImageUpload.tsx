"use client";

import Image from "next/image";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { BsFillFileEarmarkImageFill } from "react-icons/bs";

interface ImageUploadProps {
  onChange: (base64: string) => void;
  label: string;
  value?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  label,
  value,
  disabled,
}) => {
  const handleUpload = useCallback((photo: any) => {
    onChange(photo);
  }, []);

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        handleUpload(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <div className="bg-white p-8 rounded-xl flex items-center justify-center">
      <div
        {...getRootProps({
          className:
            "w-1/3 h-32 flex items-center justify-center p-4 text-black text-center border-4 border-dashed rounded-md border-neutral-700 cursor-pointer bg-white",
        })}
      >
        <input {...getInputProps()} />
        {value ? (
          <div className="flex items-center justify-center">
            <Image src={value} height={100} width={100} alt="Uploaded Image" />
          </div>
        ) : (
          <div className="w-full flex flex-row items-center justify-center gap-4">
            <p className="text-black">{label}</p>
            <BsFillFileEarmarkImageFill size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
