const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between px-5 py-7 shadow-lg bg-gray-800 text-white font-bold">
      <h2 className=" text-base">MHD Fajar Ramadhan</h2>
      <div className="flex flex-row gap-10"></div>
      <a href="#">Home</a>
      <a href="#summary">Summary</a>
      <a href="#project">Project</a>
      <a href="#education">Education</a>
    </div>
  );
};

export default Navbar;
