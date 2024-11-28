import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input className="h-10 w-full rounded-md border px-2" {...props} />;
};

export default Input;
