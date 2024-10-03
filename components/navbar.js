"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SelectTheme } from "./theme-toggler";
import { Globe2, Search } from "lucide-react";
import { useRecoilState } from "recoil";
import { searchTermState } from "../store/atoms";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useRecoilState(searchTermState);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      setSearchTerm("");

      router.push(`/search/${searchTerm}`, { scroll: false });
    }
  };
  return (
    <nav className="fixed w-full bg-background items-center border-b border-primary/5 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-4 items-center flex justify-between flex-row gap-6 text-primary">
        <div className="flex flex-row gap-4 items-center w-full">
          <button onClick={() => router.back()}>
            <Globe2 className="size-6 text-primary hover:text-green-500 transition-all duration-300" />
          </button>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row text-foreground gap-2 bg-primary/5 rounded-full w-full md:w-[50vw] lg:w-[30vw] px-3 py-2 transition-all duration-300  items-center"
          >
            <Search className="size-4 text-primary/80" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              className="bg-transparent w-full placeholder:text-primary/50 active:text-primary text-primary/80 focus:border-none focus:outline-none focus:ring-0 "
            />
          </form>
        </div>
        <SelectTheme text={false} />
      </div>
    </nav>
  );
};

export default Navbar;
