import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => (
  <div className="mx-auto w-11/12 h-full ">{children}</div>
);

export default Container;
