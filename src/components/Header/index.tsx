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
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? 'bg-white !py-4 shadow transition duration-100 dark:bg-black'
          : ''
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 lg:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between lg:w-1/2">
          <a href="/">
            <Image
              src="/assets/images/logos/logo.png"
              alt="Logo do Qualis-APS"
              width={130}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/assets/images/logos/logo.png"
              alt="Logo do QualisAPS"
              width={130}
              height={30}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="Abrir Menu"
            className="block lg:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <MdMenu className="block size-6" aria-label="Abrir Menu" />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-full ${
            navigationOpen &&
            '!visible mt-4 h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection'
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 text-zinc-800 dark:text-white lg:flex-row lg:items-center lg:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && 'group relative'}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-green"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="size-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

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
                          ? 'text-green hover:text-green'
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

          <div className="mt-7 flex items-center gap-6 lg:mt-0">
            <ThemeToggler />

            <Link
              href="https://qualisaps.unb.br/home?act=login"
              className="flex items-center justify-center rounded-full bg-green px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-green-300"
              target="_blank"
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
