import { useState } from "react";
import logo from "../assets/pet-shop.png";
import { IoIosMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: "Home",
    path: "/",
  },
  {
    icons: <FaProductHunt size={30} />,
    label: "Products",
    path: "/products",
  },
  {
    icons: <MdOutlineSpaceDashboard size={30} />,
    label: "Dashboard",
    path: "/dashboard",
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen bg-sky-600 shadow-md p-2 flex flex-col justify-between z-20 duration-300 
        ${open ? "w-60" : "w-16"} 
        md:relative`}
      >
        <div>
          <div className="px-2 py-2 h-20 flex items-center">
            <img
              src={logo}
              alt="Logo"
              className={`rounded-md transition-all duration-500 ${
                open ? "w-10 mr-auto" : "w-0 opacity-0"
              }`}
            />
            <IoIosMenu
              size={34}
              className={`cursor-pointer text-white transition-all ${
                open ? "ml-auto" : "ml-0"
              } duration-500 hover:bg-sky-700 rounded-md p-1`}
              onClick={() => setOpen(!open)}
            />
          </div>

          <ul className="mt-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-2 py-2 my-2 hover:bg-sky-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center text-white"
              >
                <div className="min-w-[30px]">{item.icons}</div>
                <p
                  className={`duration-500 overflow-hidden transition-all whitespace-nowrap ${
                    !open
                      ? "w-0 translate-x-24 opacity-0"
                      : "w-auto opacity-100"
                  }`}
                >
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-3 py-2 text-white">
          <FaUserCircle size={30} />
          <div
            className={`leading-5 overflow-hidden transition-all duration-500 ${
              !open ? "w-0 translate-x-14 opacity-0" : "w-auto opacity-100"
            }`}
          >
            <p className="text-sm font-semibold">Budiyuwono</p>
            <span className="text-xs text-gray-200">
              budikarambol@gmail.com
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
