'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div
          className="flex flex-col flex-wrap items-center
        justify-center gap-5 border-t border-stroke
        py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0"
        >
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20
              },

              visible: {
                opacity: 1,
                y: 0
              }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top w-1/2 lg:w-1/4"
          >
            <a href="index.html" className="relative">
              <Image
                width={190}
                height={80}
                src="/assets/images/logos/logo.png"
                alt=" Avaliação da Atenção Primária à Saúde do Distrito Federal"
                className="dark:hidden"
              />
              <Image
                width={190}
                height={80}
                src="/assets/images/logos/logo.png"
                alt=" Avaliação da Atenção Primária à Saúde do Distrito Federal"
                className="hidden dark:block"
              />
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20
              },

              visible: {
                opacity: 1,
                y: 0
              }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <p className="dark:text-white">
              &copy; 2020. Todos os direitos reservados
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20
              },

              visible: {
                opacity: 1,
                y: 0
              }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <ul className="flex items-center gap-5" aria-label="Redes Sociais">
              <li>
                <a
                  href="https://www.instagram.com/qualis_aps/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="fill-[#393939] text-3xl transition-all duration-300 hover:fill-green-300 dark:fill-[#e2e2e2] dark:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/programa.qualisaps/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare className="fill-[#393939] text-3xl transition-all duration-300 hover:fill-green-300 dark:fill-[#e2e2e2]" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/qualis_aps"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter className="fill-[#393939] text-3xl transition-all duration-300 hover:fill-green-300 dark:fill-[#e2e2e2]" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
