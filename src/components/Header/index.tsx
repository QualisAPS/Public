/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import navLinks from './data';

/* import icons */
import { MdMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

export default function Header() {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                    {open ? (
                      <MdClose
                        className="block h-6 w-6"
                        aria-label="Abrir Menu"
                      />
                    ) : (
                      <MdMenu
                        className="block h-6 w-6"
                        aria-label="Fechar menu"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./static/logo.png"
                    alt="Logo da plataforma Qualis"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./static/logo.png"
                    alt="Logo da plataforma Qualis"
                    style={{ width: '194px', height: '54px' }}
                  />
                </div>
              </div>
              <nav className="hidden md:ml-6 md:flex md:space-x-8">
                {/* Current: "border-teal-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                <ul className="hidden md:ml-6 md:flex md:space-x-8">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className="hidden md:ml-6 md:flex md:space-x-8"
                    >
                      <Link
                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                        href={link.url}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center">
                <div className="shrink-0">
                  {/*
                  <button
                    type="button"
                    className="relative mr-2 inline-flex items-center rounded-md border-4 border-gray-400 px-4 py-2 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <span>Entrar</span>
                  </button>
                  */}
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-teal-50 border-teal-500 text-teal-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-teal-500 bg-teal-50 py-2 pl-3 pr-4 text-base font-medium text-teal-700 sm:pl-5 sm:pr-6"
              >
                Início
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Quem Somos
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Notícias
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Biblioteca
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
