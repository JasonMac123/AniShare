interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onOpen: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onOpen,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  return <div></div>;
};

export default Modal;
