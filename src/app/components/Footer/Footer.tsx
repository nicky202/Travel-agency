import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <SiYourtraveldottv size={50} />
        <p className="text-xl">
          Agence de Voyage
          <br />
          Madagascar
        </p>
      </aside>
      <nav>
        <header className="footer-title">Contact</header>
        <p className="flex flex-row gap-2 items-center">
          <BiPhone size={18} />
          +261 34 00 00 00
        </p>
        <p className="flex flex-row gap-2 items-center">
          <IoMail size={18} />
          mail@example.com
        </p>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <Link href="#" className="hover:text-secondary">
            <FaTwitter size={25} />
          </Link>
          <Link href="#" className="hover:text-secondary">
            <FaFacebook size={25} />
          </Link>
          <Link href="#" className="hover:text-secondary">
            <FaInstagram size={25} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
