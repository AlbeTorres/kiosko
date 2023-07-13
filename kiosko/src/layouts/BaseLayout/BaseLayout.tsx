import { PropsWithChildren } from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
