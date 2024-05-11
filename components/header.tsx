"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { links } from '@/lib/data';
import {motion} from "framer-motion";


const Header = ()=> {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
    <header className="z-[999] mb-[8rem]">
    {/* <motion.div 
    classname="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white 
    border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
     backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
      dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75" 
      initial="{{" y:="" -100,="" x:="" "-50%",="" opacity:="" 0="" }}="" 
      animate="{{" 0,="" 1="" /> */}
      <nav className="w-full bg-[#000]  fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl font-bold text-white">Shahbaz</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center gap-4 md:flex ">
                {
                  links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.hash}
                        className="text-white hover:text-cyan-600 duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Header;