import { menu } from "../store/menu";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:block sxl:pr-1">
      <ul className="flex gap-x-4 sxl:gap-x-9">
        {menu.map((item, index) => {
          return (
            <li key={index} className="pr-[0.125rem]">
              <a href="#" className="font-Inter text-base text-dark-grayish-blue hover:text-soft-orange transition-all duration-700">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
