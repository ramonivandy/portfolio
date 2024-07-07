"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}

const Navbar = () => {
  const size = useWindowSize();
  const [isMenuShow, setMenuShow] = useState(false);
  const closeMenu = () => setMenuShow(false);

  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        {size ? (
          size.width >= 640 ? (
            <NavbarNormal />
          ) : (
            <NavbarMobile
              onClick={() => setMenuShow((e) => !e)}
              isMenuShow={isMenuShow}
            />
          )
        ) : (
          "Loading..."
        )}

        {isMenuShow ? <NavbarMenu closeMenu={closeMenu} /> : null}
      </header>
    </div>
  );
};

const NavbarMobile = ({
  onClick,
  isMenuShow,
}: {
  onClick: () => void;
  isMenuShow: boolean;
}) => {
  return (
    <>
      <div className="flex justify-between py-4">
        <div><Link href={'/'}>Moon.</Link></div>
        <div className="z-20">
          <button type="button" onClick={onClick}>
            {isMenuShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            ) : (
              <svg
                width="2rem"
                height="2rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

const NavbarMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <div className="bg-gray-900 fixed inset-0 z-10">
      <div className="flex flex-col justify-center h-full mx-6">
        <span className="py-4 text-3xl font-semibold"><Link onClick={closeMenu} href={'/'}>Home</Link></span>
        <span className="py-4 text-3xl font-semibold"><Link onClick={closeMenu} href={'/about'}>About</Link></span>
      </div>
    </div>
  );
};

const NavbarNormal = () => {
  return (
    <div className="flex">
      <div className="flex flex-row">
        <span className="py-4 text-xl font-semibold"><Link href={'/'}>Home</Link></span>
        <span className="px-6 py-4 text-xl font-semibold"><Link href={'/about'}>About</Link></span>
      </div>
    </div>
  );
};

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<Size | undefined>(undefined);

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
};

export default Navbar;
