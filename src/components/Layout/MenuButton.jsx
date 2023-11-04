const MenuButton = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className="mx-auto z-50 flex w-12 h-10 flex-col justify-between items-center p-1 "
      onClick={toggleMenu}
    >
      <span
        className={`bg-white rounded-lg transform transition-all duration-300 ease-in-out ${
          menuOpen ? "w-full h-1.5 rotate-45 translate-y-3.5" : "w-2 h-2"
        }`}
      />
      <span
        className={`h-2  bg-white rounded-lg transition-all duration-300 ease-in-out ${
          menuOpen ? " w-0 " : " w-2 "
        }`}
      />
      <span
        className={`bg-white rounded-lg transform transition-all duration-300 ease-in-out ${
          menuOpen ? "w-full h-1.5 -rotate-45 -translate-y-3" : "w-2 h-2"
        }`}
      />
    </div>
  );
};

export default MenuButton;
