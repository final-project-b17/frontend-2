import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [openHamburger, setOpenHamburger] = useState(false);
   const [selectedIcon, setSelectedIcon] = useState(null);

   const handleSearchClick = () => {
      setIsSearchOpen(!isSearchOpen);
   };

   const handleHamburgerClick = () => {
      setOpenHamburger(!openHamburger);
      // setSelectedIcon(null);
   };

   const handleIconClick = (iconName) => {
      setSelectedIcon(iconName);
   };

   const Menus = [
      {
         name: "Kelas",
         icon: <TfiMenuAlt className="w-8 h-6" />,
         link: "/mycourse",
         dis: "translate-x-[2px]",
      },
      {
         name: "Notifikasi",
         icon: <IoNotifications className="w-8 h-6" />,
         link: "/notif",
         dis: "translate-x-[84px]",
      },
      {
         name: "Akun",
         icon: <FaUser className="w-8 h-6" />,
         link: "/user",
         dis: "translate-x-[165.5px]",
      },
   ];

   // state navmenu web
   const [active, setActive] = useState(0);

   return (
      <>
         <nav className="w-full fixed z-20">
            <div className="flex justify-between bg-indigo-600 px-2 py-4 lg:pt-6 lg:px-10 items-center">
               {/* logo */}
               <div>
                  <Link to={'/'}>
                     <img
                        src="../../src/assets/no bg putih.png"
                        alt="logo"
                        className="w-10 h-10"
                     />
                  </Link>
               </div>

               <div className="md:flex md:flex-row-reverse md:gap-8 md:items-center">
                  {/* search mobile */}
                  <div className="relative flex gap-4 lg:hidden">
                     <div className="md:hidden">
                        <BiSearchAlt
                           className="cursor-pointer w-10 h-10 border rounded-xl py-1
                                    bg-indigo-600 text-white 
                                    hover:bg-white hover:text-indigo-600 hover:duration-100 "
                           onClick={handleSearchClick}
                        />
                        <div
                           className={`${isSearchOpen ? "-translate-x-28" : "-translate-x-[700px]"
                              }  transition-transform duration-500 ease-in-out absolute top-0 right-0 flex -mt-1`}
                        >
                           <input
                              type="text"
                              placeholder="Cari Kursus Terbaik..."
                              className="border-none px-4 transform font-poppins rounded-s-2xl"
                           />
                           <div className="bg-white p-2 rounded-e-2xl border-none">
                              <BiSearchAlt className="w-8 h-8 py-1 rounded-2xl text-indigo-600 hover:bg-indigo-700 hover:text-white cursor-pointer" />
                           </div>
                        </div>
                     </div>

                     {/* Navmenu mobile */}
                     <div className="relative">
                        <button
                           className=" lg:hidden text-white focus:outline-none"
                           onClick={handleHamburgerClick}
                        >
                           {openHamburger ? (
                              <RxCross2 className="w-10 h-9" />
                           ) : (
                              <FiMenu className="w-10 h-9" />
                           )}
                        </button>
                        <div
                           className={`${openHamburger ? "translate-y-0" : "-translate-y-72"
                              } transition-transform duration-300 ease-in-out absolute top-0 right-0 mt-16  bg-gradient-to-l from-indigo-200 border border-indigo-300 p-4 rounded-md shadow-lg `}
                        >
                           <ul className="flex flex-col gap-4">
                              <NavLink as={Link} to={"/"}>
                                 <li
                                    onClick={() => handleIconClick("Masuk")}
                                    className="flex flex-row-reverse"
                                 >
                                    {selectedIcon === "Masuk" ? (
                                       <div className="flex flex-row-reverse gap-2  bg-indigo-600 py-2 px-3 rounded-lg text-white">
                                          <LuLogIn className="w-8 h-6" />
                                          <span className="ml-2">Masuk</span>
                                       </div>
                                    ) : (
                                       <LuLogIn className="w-8 h-6 text-indigo-600" />
                                    )}
                                 </li>
                              </NavLink>
                              <NavLink as={Link} to={"/mycourse"}>
                                 <li
                                    onClick={() => handleIconClick("Kelas")}
                                    className="flex flex-row-reverse"
                                 >
                                    {selectedIcon === "Kelas" ? (
                                       <div className="flex flex-row-reverse gap-2  bg-indigo-600 py-2 px-3 rounded-lg text-white">
                                          <TfiMenuAlt className="w-8 h-6" />
                                          <span>Kelas</span>
                                       </div>
                                    ) : (
                                       <TfiMenuAlt className="w-8 h-6 text-indigo-600" />
                                    )}
                                 </li>
                              </NavLink>
                              <NavLink as={Link} to={"/notif"}>
                                 <li
                                    onClick={() => handleIconClick("Notifikasi")}
                                    className="flex flex-row-reverse"
                                 >
                                    {selectedIcon === "Notifikasi" ? (
                                       <div className="flex flex-row-reverse gap-2  bg-indigo-600 py-2 px-3 rounded-lg text-white">
                                          <IoNotifications className="w-8 h-6" />
                                          <span>Notifkasi</span>
                                       </div>
                                    ) : (
                                       <IoNotifications className="w-8 h-6 text-indigo-600" />
                                    )}
                                 </li>
                              </NavLink>
                              <NavLink as={Link} to={"/user"}>
                                 <li
                                    onClick={() => handleIconClick("Akun")}
                                    className="flex flex-row-reverse"
                                 >
                                    {selectedIcon === "Akun" ? (
                                       <div className="flex flex-row-reverse gap-2  bg-indigo-600 py-2 px-3 rounded-lg text-white">
                                          <FaUser className="w-8 h-6 " />
                                          <span>Akun</span>
                                       </div>
                                    ) : (
                                       <FaUser className="w-8 h-6 text-indigo-600" />
                                    )}
                                 </li>
                              </NavLink>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* search web*/}
                  <div className="hidden md:block lg:block">
                     <form action="search" className="font-poppins flex">
                        <input
                           className="border-none py-3 px-4 rounded-s-2xl bg-white text-sm lg:text-base lg:w-[500px]"
                           placeholder="Cari kursus terbaik..."
                           type="text"
                           name="search"
                        />
                        <button
                           type="submit"
                           className=" bg-white rounded-e-2xl flex items-center px-2"
                        >
                           <BiSearchAlt className="border bg-indigo-600 text-white w-10 h-10 rounded-xl py-1 cursor-pointer hover:shadow-md hover:bg-indigo-700 " />
                        </button>
                     </form>
                  </div>
               </div>

               {/* NavMenu Web */}
               <div className="hidden items-center lg:flex">
                  {/* if not login  */}
                  <NavLink
                     as={Link}
                     to={"/"}
                     className="group relative flex flex-row-reverse gap-2 mr-8 font-poppins text-white items-center font-semibold border-2 border-white p-2 rounded-2xl transition-all hover:text-indigo-600 hover:bg-white"
                  >
                     <button className="">Masuk</button>
                     <div className="">
                        <FaArrowRightLong className="text-white w-8 h-6 mr-2 transition-all group-hover:mr-4" />
                        <LuLogIn className="w-8 h-8 absolute top-1/2 transform -translate-y-1/2 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-2" />
                     </div>
                  </NavLink>

                  {/* if done login */}
                  <ul className="flex relative gap-6 items-center">
                     <span
                        className={`bg-white duration-500 ${Menus[active].dis} border-2 border-white h-14 w-14 absolute -left-2 top-2 rounded-t-full`}
                     ></span>
                     {Menus.map((menu, i) => (
                        <li key={i}>
                           {/* {acttive} */}
                           <NavLink
                              as={Link}
                              to={menu.link}
                              className="flex flex-col items-center"
                              onClick={() => setActive(i)}
                           >
                              <span
                                 className={`z-10 duration-500 text-white hover:text-slate-400 ${i === active && "-mb-12 text-yellow-400"
                                    }`}
                              >
                                 {menu.icon}
                              </span>
                              <p
                                 className={`text-white font-poppins font-medium ${active === i
                                    ? "-translate-y-4 duration-700 opacity-100"
                                    : "opacity-0 -translate-y-16"
                                    }`}
                              >
                                 {menu.name}
                              </p>
                           </NavLink>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
