'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
/* import icons */
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import ThemeToggler from './ThemeToggler';
import menuData from './menuData';

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 w-full z-99999 py-7 ${
        stickyMenu
          ? 'bg-white dark:bg-black shadow !py-4 transition duration-100'
          : ''
      }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/2 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/logo/logo.png"
              alt="Logo do QualisAPS"
              width={130}
              height={30}
              className="w-full hidden dark:block"
            />
            <Image
              src="/images/logo/logo.png"
              alt="Logo do QualisAPS"
              width={130}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="Abrir Menu"
            className="lg:hidden block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <MdMenu className="block h-6 w-6" aria-label="Abrir Menu" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
            navigationOpen &&
            '!visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5'
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10 text-zinc-800 dark:text-white">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && 'group relative'}>
                  {menuItem.submenu ? (
                    <>
                      <a
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="hover:text-green flex items-center justify-between gap-3 cursor-pointer"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </a>

                      <ul
                        className={`dropdown ${dropdownToggler ? 'flex' : ''}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-green">
                            <Link href={item.path || '#'}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? 'hover:text-green text-green'
                          : 'hover:text-green'
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 mt-7 lg:mt-0">
            <ThemeToggler />

            <Link
              href="https://qualisaps.unb.br/home?act=login"
              className="flex items-center justify-center bg-green hover:bg-green-300 ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
              target='_blank'
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
