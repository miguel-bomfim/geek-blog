"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import logo from "../app/assets/logo.png";
import SearchInput from "@/components/searchInput";
import { CategoryType } from "../types";

interface MenuType {
  categories: CategoryType[];
}

export default function Menu({ categories }: MenuType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#1B263B] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <Image className="w-20" alt="" src={logo} />
          </Link>
          {/* <SearchInput className="md:hidden" /> */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#005aaf] md:bg-transparent`}
          >
            <Link
              href="/"
              onClick={toggleMenu}
              className="p-4 md:p-2 hover:bg-[#d7263d] transition-colors flex items-center"
            >
              Home
            </Link>
            {categories.map((category, idx) => {
              return (
                <Link
                  onClick={toggleMenu}
                  key={idx}
                  href={`/categoria/${category.slug}`}
                  className="p-4 md:p-2 hover:bg-[#d7263d] transition-colors flex items-center"
                >
                  {category.nome}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
