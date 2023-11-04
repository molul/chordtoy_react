const Footer = () => {
  return (
    // <div className="text-white flex flex-col justify-between min-h-screen bg-black bg-opacity-20 overflow-hidden">
    <div className="bg-mainBlue p-3 w-full text-white space-y-2 text-center">
      <div>
        Developed by{" "}
        <a
          className="text-mainOrange hover:text-mainOrangeLight transition-colors duration-300"
          href="https://www.luismorcilloluque.com/"
          target="_blank"
          rel="noreferrer"
        >
          Luis Morcillo
        </a>{" "}
        with React
      </div>
      <div>&copy; 2023</div>
    </div>
  );
};

export default Footer;
