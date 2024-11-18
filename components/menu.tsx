"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LuGamepad2,
  LuNewspaper,
  LuHome,
  LuRocket,
  LuMenu,
  LuX,
  LuFilm,
  LuGlobe,
  LuPencil,
} from "react-icons/lu";
import logo from "@/app/assets/logo.png";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    {
      categoria: "Home",
      link: "/",
      icon: <LuHome className="inline-block mr-1" size={18} />,
    },
    {
      categoria: "Filmes/Séries",
      link: "/",
      icon: <LuFilm className="inline-block mr-1" size={18} />,
    },
    {
      categoria: "Weeb",
      link: "/",
      icon: <LuNewspaper className="inline-block mr-1" size={18} />,
    },
    {
      categoria: "Games",
      link: "/",
      icon: <LuGamepad2 className="inline-block mr-1" size={18} />,
    },
    {
      categoria: "Tech",
      link: "/",
      icon: <LuRocket className="inline-block mr-1" size={18} />,
    },
    {
      categoria: "Variedades",
      link: "/",
      icon: <LuGlobe className="inline-block mr-1" size={18} />,
    },
    {
      categoria: "Críticas",
      link: "/",
      icon: <LuPencil className="inline-block mr-1" size={18} />,
    },
  ];

  return (
    <header className="bg-[#005aaf] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <Image className="w-12" alt="" src={logo} />
            lndf
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#005aaf] md:bg-transparent`}
          >
            {menuItems.map((item) => {
              return (
                <Link
                  href={item.link}
                  className="p-4 md:p-2 hover:bg-[#d7263d] transition-colors flex items-center"
                >
                  {item.icon}
                  {item.categoria}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
