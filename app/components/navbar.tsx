import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
      <div>
        <header className="bg-white dark:bg-gray-900">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link href={"/dashboard"}>
                      <p className="text-base font-semibold text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                        Home
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"}>
                      <p className="text-base font-semibold text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                        About
                      </p>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4"></div>

                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}
