import Container from "../../../utils/Container";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavMenuOut from "./components/NavMenuOut";

export const Header = () => {
  return (
    <header className="bg-base-100 !fixed top-0  z-50   w-full md:py-4 min-h-6  ">
      <Container>
        <div className="flex justify-between items-center my-1">
          <div className="flex items-center">
            <FaShoppingCart className="text-xl" />
            <Link to={"/"} className="normal-case text-xl ml-1 ">
              {" "}
              Kiosquito
            </Link>
          </div>

          <NavMenuOut />
        </div>
      </Container>
    </header>
  );
};