import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Navigation from "../menu/Navigation";

const Header = () => {
  return (
    <header className="flex max-w-screen-sxl items-center justify-between px-4 pt-7 sxl:ml-auto sxl:mr-auto sxl:pt-22">
      <div className="h-8 w-12 sxl:w-18 sxl:pl-1">
        <Logo />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
