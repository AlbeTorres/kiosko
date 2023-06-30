import { forwardRef, ForwardedRef, ComponentType, ComponentProps } from "react";
import cn from "../util/cn";

export type BaseTextFieldProps = JSX.IntrinsicElements["input"] & {
  label?: string;
  labelHelp?: string;
  variant?: "standard" | "outlined" | "rounded";
  password?: boolean;
  error?: string;
  icon?: ComponentType<BaseTextFieldProps["iconProps"]>;
  iconProps?: ComponentProps<"svg">;
  inputClassName?: string;
  inputWrapperClassName?: string;
};

const classes = {
  root: "flex flex-col w-full ",
  label: {
    standard: "label",
    span: "label-text",
  },
  inputWrapper: {
    base: "flex items-center w-full relative",
  },
  input: {
    base: "input input-bordered w-full text-center",
  },
  icon: {
    base: "ml-2 flex-none ",
    standard: "mr-2 absolute z-10 right-0",
  },
};

const BaseTextField = (
  {
    value,
    label,
    labelHelp,
    name,
    variant = "standard",
    placeholder,
    password,
    error,
    className,
    inputClassName,
    inputWrapperClassName,
    icon: Icon,
    iconProps,
    ...props
  }: BaseTextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <div className={classes.root}>
    <label className={classes.label.standard}>
      <span className={classes.label.span}>{label}</span>
    </label>
    <div
      className={cn(
        classes.inputWrapper["base"],
        classes.inputWrapper[variant],
        inputWrapperClassName
      )}
    >
      <input
        type={password ? "password" : "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        className={classes.input.base}
        {...props}
        ref={ref}
      />
      {Icon && (
        <Icon
          width={18}
          height={18}
          {...iconProps}
          className={cn(classes.icon["base"], iconProps?.className)}
        />
      )}
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default forwardRef(BaseTextField);
