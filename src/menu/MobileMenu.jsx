import { menu } from "../store/menu";
import { ReactComponent as Close } from "../assets/images/icon-menu-close.svg";

const MobileMenu = ({ onClose }) => {
  return (
    <nav className="flex w-[16rem] flex-col pl-6 pr-5 pt-7">
      <button aria-label="close menu" className="self-end" onClick={onClose}>
        <Close aria-hidden={true} focusable={false} />
      </button>
      <ul className="pt-20 flex flex-col gap-y-4">
        {menu.map((item, index) => {
          return (
            <li key={index} className="pt-1">
              <a href="#" className="font-Inter text-very-dark-blue text-lg">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
