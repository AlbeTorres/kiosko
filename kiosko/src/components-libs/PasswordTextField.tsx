import { useState, forwardRef, ForwardedRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import BaseTextField, { BaseTextFieldProps } from "./BaseTextField";

export type PasswordTextFieldProps = Omit<BaseTextFieldProps, "icon">;

const PasswordTextField = (
  { variant = "standard", ...props }: PasswordTextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  return (
    <BaseTextField
      password={!showPassword}
      icon={showPassword ? FaEye : FaEyeSlash}
      iconProps={{
        onClick: toggleShowPassword,
        className: "flex-none text-topaz cursor-pointer",
      }}
      variant={variant}
      {...props}
      ref={ref}
    />
  );
};

export default forwardRef(PasswordTextField);
