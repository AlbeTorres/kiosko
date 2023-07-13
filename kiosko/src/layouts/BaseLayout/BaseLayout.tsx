import { PropsWithChildren } from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Container from "../utils/Container";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default BaseLayout;
