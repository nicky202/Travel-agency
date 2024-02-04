import Link from "next/link";
import React from "react";
import { SiYourtraveldottv } from "react-icons/si";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="flex-1">
        <Link href="/">
          <SiYourtraveldottv size={30} />
        </Link>
        <Link href="/" className="btn btn-ghost text-xl hidden sm:flex">
          Agence de Voyage <span className="text-sm">Madagascar</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className="hover:bg-secondary hover:text-white focus:text-white bg-opacity-50 focus:bg-secondary"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="#footer"
              className="hover:bg-secondary hover:text-white  focus:text-white  bg-opacity-50 focus:bg-secondary"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
