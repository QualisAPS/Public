'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
      <article className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <header className=" md:w-1/2">
            <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
              Programa
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                QualisAPS
              </span>
            </h1>
            <p className=" text-zinc-800 dark:text-white">
              O Programa de Qualificação da Atenção Primária à Saúde do Distrito
              Federal (Qualis-APS) tem uma proposta inovadora pois desenvolve
              ações de forma participativa, considerando as experiências e o
              conhecimento dos trabalhadores, gestores e representantes dos
              usuários do Sistema Único de Saúde (SUS) do DF.
            </p>
          </header>

          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative 2xl:-mr-7.5">
              <div className=" relative aspect-[700/444] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/assets/images/hero/other-hero.webp"
                  alt=""
                  fill
                />
                <Image
                  className="hidden dark:block shadow-solid-l"
                  src="/assets/images/hero/hero.webp"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
