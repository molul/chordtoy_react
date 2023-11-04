const MenuMobile = ({ menuOpen }) => {
  return (
    <div
      className={`flex justify-center z-40 absolute font-serif text-base h-full bg-mainPurple bg-opacity-95 text-white transition-all duration-300 w-full ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`flex items-center justify-center z-40 max-w-lg p-2 absolute font-sans text-base h-full transition-all duration-300 w-full `}
      >
        <div className="uppercase font-bold">Options coming soon</div>
      </div>
    </div>
  );
};

export default MenuMobile;
