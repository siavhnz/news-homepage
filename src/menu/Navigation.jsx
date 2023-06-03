import { useState } from "react";
import { ReactComponent as Hambur } from "../assets/images/icon-menu.svg";
import { Drawer } from "@mui/material";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleCloseMenu = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div className="sxl:self-end">
      <button
        aria-label="open menu"
        onClick={handleOpenMenu}
        className="md:hidden"
      >
        <Hambur aria-hidden={true} focusable={false} />
      </button>
      <Drawer anchor={"right"} open={isOpen} onClose={handleCloseMenu}>
        <MobileMenu onClose={handleCloseMenu} />
      </Drawer>
      <DesktopMenu />
    </div>
  );
};

export default Navigation;
