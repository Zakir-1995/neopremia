import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`  fixed top-0 left-0 right-0  z-50 px-5 lg:py-4 sm:py-2 md:py-3 py-1   ${
        isSticky
          ? "bg-black/80 shadow-md transition-all duration-200 ease-in-out border-none"
          : "bg-black/90"
      }`}
    >
      <div className=" flex items-center justify-between gap-4 max-w-6xl mx-auto relative">
        <Link
          to="/"
          className="text-white text-lg sm:text-xl md:text-2xl font-semibold"
        >
          <img
            src="/logo_n.jpg"
            alt="/"
            className="w-20 rounded-full border border-megenta/60 "
          />
        </Link>
        <div className="flex items-center gap-5">
          <ul className="hidden items-center justify-center gap-4 md:flex">
            <Link to="/">
              <li
                className={`uppercase text-sm text-white ${
                  location.pathname === "/" ? "border-b-2 border-yellow" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`uppercase text-sm text-white ${
                  location.pathname === "/about" ? "border-b border-yellow" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/products">
              <li
                className={`uppercase text-sm text-white ${
                  location.pathname === "/products"
                    ? "border-b border-yellow"
                    : ""
                }`}
              >
                Products
              </li>
            </Link>
            <Link to="/blogs">
              <li
                className={`uppercase text-sm text-white ${
                  location.pathname === "/blogs" ? "border-b border-yellow" : ""
                }`}
              >
                Blogs
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={`uppercase text-sm text-white ${
                  location.pathname === "/contact"
                    ? "border-b border-yellow"
                    : ""
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:block hidden">
          <Link to="/about">
            {" "}
            <button className="bg-yellow border border-megenta lg:px-8 md:px-6 sm:px-4 px-2 lg:py-2 py-1   text-white font-light uppercase hover:bg-megenta transition-all duration-150 ease-linear rounded md:text-base text-sm">
              Learn More
            </button>
          </Link>
        </div>

        {/* mobile menu  */}
        <div
          className={`fixed md:hidden block transition-all duration-700 ease-in-out -z-10 sm:top-20 top-[72px]  space-y-8 w-full ${
            isSticky
              ? "bg-black/80 shadow-md transition-all duration-200 ease-in-out border-none "
              : "bg-black/90 "
          } p-4 ${
            menuOpen
              ? " opacity-100 visible pointer-events-auto left-0"
              : " opacity-0 invisible pointer-events-none -left-[100%]"
          }`}
        >
          <ul className="md:hidden flex flex-col    w-full">
            <Link to="/" className="w-full ">
              <li
                className={`uppercase text-sm border-b border-gray-100/10  px-4 py-3  ${
                  location.pathname === "/" ? "text-yellow" : "text-white "
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/about" className="w-full ">
              <li
                className={`uppercase text-sm border-b border-gray-100/10  px-4 py-3 ${
                  location.pathname === "/about" ? "text-yellow " : "text-white"
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/products" className="w-full ">
              <li
                className={`uppercase text-sm border-b border-gray-100/10  px-4 py-3 ${
                  location.pathname === "/products"
                    ? "text-yellow "
                    : "text-white"
                }`}
              >
                Products
              </li>
            </Link>
            <Link to="/blogs" className="w-full ">
              <li
                className={`uppercase text-sm border-b border-gray-100/10  px-4 py-3 ${
                  location.pathname === "/blogs" ? "text-yellow " : "text-white"
                }`}
              >
                Blogs
              </li>
            </Link>
            <Link to="/contact" className="w-full ">
              <li
                className={`uppercase text-sm  px-4 py-3 ${
                  location.pathname === "/contact"
                    ? "text-yellow "
                    : "text-white"
                }`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden block">
            <Link to="/about">
              <button className="bg-yellow lg:px-10 md:px-8 sm:px-6 px-4 lg:py-3 md:py-2 py-1   text-white font-light uppercase hover:bg-megenta transition-all duration-150 ease-linear rounded md:text-base text-sm">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile menu handler  */}
      <div className="absolute right-5 top-5 md:hidden block">
        {menuOpen ? (
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <IoCloseSharp size={22} />
          </button>
        ) : (
          <button onClick={() => setMenuOpen(true)} className="text-white">
            <IoMenu size={22} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
