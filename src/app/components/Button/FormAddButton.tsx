"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormAddButtonProps = {
  chidlren?: React.ReactNode;
} & ComponentProps<"button">;

const FormAddButton = ({ children }: FormAddButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button className={`btn btn-secondary `} type="submit" disabled={pending}>
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
};

export default FormAddButton;
