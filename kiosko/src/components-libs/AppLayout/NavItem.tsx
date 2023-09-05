import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  icon?: ReactNode;
  iconActive?: ReactNode;
  active?: boolean;
  selected?: boolean;
};
export default function NavItem({
  icon,
  iconActive,
  children,
  active = false,
  selected = false,
  className,
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        "flex cursor-pointer items-center gap-4 rounded-md px-3 py-2.5",
        "w-full hover:bg-black/5 hover:text-black",
        {
          "!bg-primary/10": active,
          "bg-black/5": selected,
          "text-black": active || selected,
          "text-black/60 ": !active,
        },
        className
      )}
      {...props}
    >
      {icon && !active && <span className="h-6 w-6">{icon}</span>}
      {active && <span className="h-6 w-6">{iconActive ?? icon}</span>}
      <span className="flex-1 truncate text-start normal-case leading-none">{children}</span>
    </div>
  );
}
