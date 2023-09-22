"use client";

import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../input/Button";

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  onClose: () => void;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  body,
  footer,
  onClose,
  onSubmit,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
        <div className="relative w-full lg:w-3/7 my-6 lg:max-w-3xl h-full lg:h-auto z">
          <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full relative bg-taupe z-50 outline-none focus:outline-none">
            <div className="flex items-center justify-between p-10 rounded-t">
              <h3 className="text-3xl font-semibold text-isabelline">
                {title}
              </h3>
              <button
                onClick={handleClose}
                className="p-1 ml-auto border-0 text-isabelline hover:opacity-70 transition"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="relative p-10 flex-auto">{body}</div>
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;