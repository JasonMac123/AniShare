"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

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
        handleUpload(event.target.results);
      };

      reader.readAsDataURL(file);
    },
    [handleUpload]
  );

  return <div></div>;
};

export default ImageUpload;
