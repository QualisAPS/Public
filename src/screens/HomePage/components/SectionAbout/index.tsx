'use client';
import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';

const SectionAbout = () => {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-25">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: 'Sobre',
            subtitle: 'Conheça o QualisAPS',
            description: ``
          }}
        />

        <article className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10 mt-8 xl:mt-10">
          <div className="blog-details">
            <p>
              O Programa é fruto de uma parceria entre a Secretaria de Estado da
              Saúde do Distrito Federal (SES-DF), a Fundação Oswaldo Cruz
              (Fiocruz-Brasília) e a Universidade de Brasília (UnB).
            </p>

            <p>
              O Programa de Qualificação da Atenção Primária à Saúde do Distrito
              Federal (Qualis-APS) tem uma proposta inovadora pois desenvolve
              ações de forma participativa, considerando as experiências e o
              conhecimento dos trabalhadores, gestores e representantes dos
              usuários do Sistema Único de Saúde (SUS) do DF.
            </p>
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="/sobre"
              aria-labelledby="about"
              className="flex items-center justify-center bg-green hover:bg-green-300 ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
            >
              Conheça Mais
            </Link>
            <p id="about" className="sr-only">
              Conheça Mais sobre o QualisAPS
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SectionAbout;
