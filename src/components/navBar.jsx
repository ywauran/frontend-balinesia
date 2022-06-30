/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link
              to="/"
              className="font-black text-3xl text-theme1 block py-6 hover:text-theme2"
            >
              Balinesia
            </Link>
          </div>
          <div className="flex items-center px-4">
            <div className="block absolute right-4 lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#fafafa"
                onToggle={(toggled) => {
                  if (toggled) {
                    // open a menu
                    console.log(toggled);
                  } else {
                    // close a menu
                    console.log(toggled);
                  }
                }}
              />
            </div>
            <nav className={isOpen ? "navmenu-show" : "navmenu-hidden"}>
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    to="/"
                    className="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/cari"
                    className="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2"
                  >
                    Cari Destinasi
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/jelajah"
                    className="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2"
                  >
                    Jelajah
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/rekomendasi"
                    className="text-base font-bold text-theme1 py-2 mx-8 flex group-hover:text-theme2"
                  >
                    Rekomendasi
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
