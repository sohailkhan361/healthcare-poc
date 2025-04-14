import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/insurance-providers", label: "Insurance" },
    { href: "/doctors", label: "Doctors" },
    { href: "/blogs", label: "News & Blogs" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-8 px-4 border-b border-neutral-200 z-50">
      {/* Logo Section */}
      <Link
        to="/"
        className="text-2xl text-blue-600 font-bold mr-16 flex items-center"
      >
        <MdOutlineHealthAndSafety className="text-4xl" /> HealthCare+
      </Link>

      {/* Toggle */}
      <button
        onClick={handleClick}
        className="flex-1 md:hidden text-neutral-600 ease-in-out suration-300 flex items-center justify-end"
      >
        {open ? (
          <LiaTimesSolid className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>

      {/* Nav items and btns */}
      <div
        className={`${
          open
            ? "flex absolute top-16 left-[50%] translate-x-[-50%] w-[95%] h-auto md:relative"
            : "hidden"
        } 
        flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-4 md:items-center md:p-0 p-4 justify-between md:bg-transparent
        bg-neutral-50 md:border-none border border-neutral-200 md:shadow-none shadow-md rounded-md`}
      >
        {/* Nav items */}
        <ul className="list-none font-semibold flex md:items-center items-start gap-x-7 gap-y-3 flex-wrap md:flex-row flex-col text-sm text-neutral-600">
          {navLinks.map((nav, ind) => (
            <li
              key={`${ind}-${nav.label}`}
              className="hover:text-blue-500 ease-in-out duration-300"
            >
              <Link
                to={nav.href}
                className="hover:text-blue-500 ease-in-out duration-300 "
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex md:items-center items-start gap-x-5 md:flex-row flex-col text-sm font-medium text-neutral-50">
          <button className="w-fit px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-800 ease-in-out duration-300">
            Appointment
          </button>
        </div>

        {/* Login */}
        <div className="flex md:items-center items-start gap-x-5 md:flex-row flex-col text-sm font-medium text-neutral-50">
          <Link
            to={"/login"}
            className="w-fit px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-800 ease-in-out duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
