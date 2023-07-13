import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => (
  <div className="mx-auto w-11/12 ">{children}</div>
);

export default Container;
