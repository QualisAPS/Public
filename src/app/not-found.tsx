import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página 404 - QualisAPS',
  description: 'Página 404 - QualisAPS'
};

const ErroPage = () => {
  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <article className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/assets/images/error/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h1 className="mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl">
          Esta página não existe
        </h1>
        <p className="mb-7.5">
          A página que você estava procurando parece ter sido movida, excluída
          ou não existe.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
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
