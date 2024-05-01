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
    <header className="fixed w-full bg-background/50 z-10 backdrop-blur items-center">
      <div className="wrapper flex justify-between flex-row gap-6 text-primary">
        <Link href="/" className="items-center">
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 rounded-md text-primary transition-all hover:scale-110
            duration-300 hover:shadow-[0_0_64px_-8px_rgba(0,255,0,0.4)]"
          >
            <rect width="512" height="512" fill="url(#paint0_linear_119_2)" />
            <path
              d="M344 155.385H319.741V305.937H280.878V252.045C272.131 261.603 259.919 266.383 244.242 266.383C226.584 266.383 212.97 260.532 203.398 248.831C193.827 236.965 189.041 221.555 189.041 202.602V155.385H168V123H344V155.385ZM280.878 155.385H227.904V202.602C227.904 212.161 230.05 219.742 234.34 225.346C238.796 230.949 245.48 233.751 254.391 233.751C262.807 233.751 269.326 231.032 273.947 225.593C278.567 220.154 280.878 213.232 280.878 204.827V155.385Z"
              fill="url(#paint1_linear_119_2)"
            />
            <path
              d="M332.801 385.045C324.384 387.682 315.473 389 306.067 389C291.049 389 278.177 385.127 267.451 377.381C256.724 369.8 251.361 358.016 251.361 342.03C251.361 328.186 256.146 317.061 265.718 308.656C275.289 300.251 288.491 296.048 305.324 296.048C311.595 296.048 316.381 296.213 319.681 296.543V322.5H308.542C302.271 322.5 297.485 324.148 294.185 327.444C290.719 330.905 288.986 335.273 288.986 340.546C288.986 346.644 291.132 351.094 295.422 353.896C299.713 356.698 305.324 358.099 312.255 358.099C318.691 358.099 325.54 357.027 332.801 354.885V385.045Z"
              fill="url(#paint2_linear_119_2)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_119_2"
                x1="256"
                y1="0"
                x2="256"
                y2="512"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.455" stopColor="#050F05" />
                <stop offset="1.0001" stopColor="#0D260D" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_119_2"
                x1="256.096"
                y1="34.0037"
                x2="256.096"
                y2="404.821"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.455" stopColor="#40BF40" />
                <stop offset="0.815" stopColor="#ECF9EC" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_119_2"
                x1="256.096"
                y1="34.0037"
                x2="256.096"
                y2="404.821"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.455" stopColor="#40BF40" />
                <stop offset="0.815" stopColor="#ECF9EC" />
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
