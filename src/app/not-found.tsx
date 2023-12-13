import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página 404 - QualisAPS',
  description: 'Página 404 - QualisAPS'
  // other metadata
};

const ErroPage = () => {
  return (
    <section className="pt-45 lg:pt-50 xl:pt-55 pb-25 lg:pb-32.5 xl:pb-37.5 overflow-hidden">
      <article className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/error/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h1 className="font-semibold text-2xl md:text-4xl text-black dark:text-white mb-5">
          Esta página não existe
        </h1>
        <p className="mb-7.5">
          A página que você estava procurando parece ter sido movida, excluída
          ou não existe.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2.5 bg-black dark:bg-btndark hover:bg-blackho ease-in-out duration-300 font-medium text-white rounded-full px-6 py-3"
        >
          Voltar para a tela inicial
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </a>
      </article>
    </section>
  );
};

export default ErroPage;
