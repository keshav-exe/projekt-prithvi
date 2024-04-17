"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { setTheme } = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      setSearchTerm("");

      router.push(`/search/${searchTerm}`, { scroll: false });
    }
  };
  return (
    <header className="fixed w-full bg-background/50 z-10 backdrop-blur">
      <div className="wrapper flex justify-between flex-row gap-6 text-primary">
        <Link href="/" className="my-auto">
          <svg
            width="256"
            height="256"
            viewBox="0 0 256 388"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-primary transition-all hover:scale-125 duration-300 drop-shadow-[0_0_2px_rgba(0,0,0,0.4)]"
          >
            <path
              d="M255.96 47.16H220.68V266.4H164.16V187.92C151.44 201.84 133.68 208.8 110.88 208.8C85.2 208.8 65.4 200.28 51.48 183.24C37.56 165.96 30.6 143.52 30.6 115.92V47.16H0V0H255.96V47.16ZM164.16 47.16H87.12V115.92C87.12 129.84 90.24 140.88 96.48 149.04C102.96 157.2 112.68 161.28 125.64 161.28C137.88 161.28 147.36 157.32 154.08 149.4C160.8 141.48 164.16 131.4 164.16 119.16V47.16Z"
              fill="url(#paint0_linear_120_6)"
            />
            <path
              d="M239.673 381.6C227.433 385.44 214.473 387.36 200.793 387.36C178.953 387.36 160.233 381.72 144.633 370.44C129.033 359.4 121.233 342.24 121.233 318.96C121.233 298.8 128.193 282.6 142.113 270.36C156.033 258.12 175.233 252 199.713 252C208.833 252 215.793 252.24 220.593 252.72V290.52H204.393C195.273 290.52 188.313 292.92 183.513 297.72C178.473 302.76 175.953 309.12 175.953 316.8C175.953 325.68 179.073 332.16 185.313 336.24C191.553 340.32 199.713 342.36 209.793 342.36C219.153 342.36 229.113 340.8 239.673 337.68V381.6Z"
              fill="url(#paint1_linear_120_6)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_120_6"
                x1="128.12"
                y1="-129.6"
                x2="128.12"
                y2="410.4"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.455" stop-color="#40BF40" />
                <stop offset="0.815" stop-color="#ECF9EC" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_120_6"
                x1="128.12"
                y1="-129.6"
                x2="128.12"
                y2="410.4"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.455" stop-color="#40BF40" />
                <stop offset="0.815" stop-color="#ECF9EC" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="flex flex-row text-foreground gap-3 bg-primary/5 rounded-[2rem] w-full md:w-[50vw] lg:w-[30vw] px-5 py-3 text-base transition-all duration-300 hover:shadow-[0_0_64px_-16px_rgba(225,191,0,0.2)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 my-auto "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
            className="bg-transparent w-full placeholder:text-primary/50 active:text-primary text-primary/80 focus:border-none focus:outline-none focus:ring-0 "
          />
        </form>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>

              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
