import MenuButton from "./MenuButton";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="z-50 font-toyBox tracking-wide bg-mainBlue uppercase text-4xl md:text-5xl w-full text-white flex items-center flex-row justify-center h-16 px-2">
        <div className="z-50 max-w-lg w-full flex flex-row justify-between items-center space-x-2">
          <div className="pt-1">Chordtoy</div>

          <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      <MenuMobile menuOpen={menuOpen} />
    </>
  );
};

export default Header;
