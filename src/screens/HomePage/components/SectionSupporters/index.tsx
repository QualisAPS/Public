'use client';
import React from 'react';
import Image from 'next/image';

const SectionSupporters = () => {
  return (
    <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-6">
      <article className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <h2 className="sr-only">Apoiadores do programa Qualis-APS</h2>
        <div className="flex gap-12 justify-center items-center">
          <a
            href="https://www.unb.br/"
            className="animate_top block relative h-20 mx-w-full w-[100px]"
          >
            <Image
              className="opacity-65 transition-all duration-300 hover:opacity-100 image"
              src="/assets/images/supporters/unb.jpg"
              alt="Logo da Unb"
              fill
            />
          </a>
          <a
            href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus"
            className="animate_top block relative h-15 mx-w-full w-[120px]"
          >
            <Image
              className="opacity-65 transition-all duration-300 hover:opacity-100 image"
              src="/assets/images/supporters/logo_sus.png"
              alt="Logo do sus"
              fill
            />
          </a>
          <a
            href="https://portal.fiocruz.br/"
            className="animate_top block relative h-15 mx-w-full w-[120px]"
          >
            <Image
              className="opacity-65 transition-all duration-300 hover:opacity-100 image"
              src="/assets/images/supporters/fiocruz.png"
              alt="Logo da Fiocruz"
              fill
            />
          </a>
          <a
            href="https://portal.fiocruz.br/"
            className="animate_top block relative h-25 mx-w-full w-[120px]"
          >
            <Image
              className="opacity-65 transition-all duration-300 hover:opacity-100 image"
              src="/assets/images/supporters/brasao-gdf.png"
              alt="bandeira do Distrito Federal é composta por um retângulo branco, representando a paz. No escudo, o verde e o amarelo do seu esmalte único (sinople) e de seu único metal (ouro) juram fidelidade aos símbolos nacionais."
              fill
            />
          </a>
        </div>
      </article>
    </section>
  );
};

export default SectionSupporters;
