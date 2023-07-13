import cn from "../../util/cn";
import Spinner from "../Spinner";
import { FC, JSX } from "react";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  loading?: boolean;
  className?: string;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  loading,
  className,
  disabled,
  ...props
}): JSX.Element => {
  return (
    <button
      type={props.type ?? "button"}
      disabled={disabled}
      className={cn("btn", className, disabled && 'grayscale')}
      {...props}
    >
      {loading && (
        <Spinner className="-ml-1 mr-2 h-5 w-5 shrink-0 text-inherit " />
      )}
      {children}
    </button>
  );
};