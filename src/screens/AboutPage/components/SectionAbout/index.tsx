'use client';
import React from 'react';
import SectionHeader from '@/components/SectionHeader';

const SectionAbout = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: 'Sobre',
              subtitle: 'Conheça o QualisAPS',
              description: `O QualisAPS é o Programa de Qualificação da Atenção Primária à Saúde
              do Distrito Federal.`
            }}
          />

          <article className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10 mt-8 xl:mt-10">
            <div className="blog-details">
              <p>
                O QualisAPS é o Programa de Qualificação da Atenção Primária à
                Saúde do Distrito Federal. Criado pela Portaria nº 39, de 23 de
                janeiro de 2019, tem por objetivo o fortalecimento da Atenção
                Primária à Saúde (APS) no Distrito Federal (DF), visando a
                melhoria dos serviços prestados.
              </p>

              <p>
                O Programa é fruto de uma parceria entre a Secretaria de Estado
                da Saúde do Distrito Federal (SES-DF), Fundação Oswaldo Cruz
                (Fiocruz-Brasília) e Universidade de Brasília (UnB). O QualisAPS
                tem uma proposta inovadora ao desenvolver suas ações de forma
                participativa onde as experiências e o conhecimento dos
                trabalhadores, gestores e representantes dos usuários do Sistema
                Único de Saúde/DF são consideradas.
              </p>
              <p>
                O eixo de Avaliação do Qualis APS está organizado em ciclos, com
                fases que se repetem a cada nova etapa, promovendo melhorias
                crescentes na qualidade. Todas as equipes de saúde da família
                (eSF), equipes de saúde bucal (eSB) e também, as equipes de
                gestão local estão incluídas no Programa e deverão participar de
                cada fase do ciclo, que se inicia com a construção do Plano de
                Ação para a Qualidade.
              </p>
              <p>
                Antes do início da 1ª fase, em 2020 e 2021, foi realizado um
                diagnóstico inicial da estrutura das Unidades Básicas de Saúde
                (UBS) e dos serviços prestados pelas eSF e eSB para estabelecer
                a linha de base sobre a qualidade dos serviços da APS no DF. A
                primeira etapa do diagnóstico inicial foi a avaliação de
                estrutura das 165 UBS, realizada por meio de entrevistas
                telefônicas e do preenchimento de um instrumento pelas GSAPS.
                Para completar esse o diagnóstico será realizado a autoavaliação
                pelas equipes de saúde da família e de saúde bucal e pelas
                Gerências de Serviços da Atenção Primária à Saúde (GSAPS). O
                primeiro ciclo iniciou em 2021 com o Plano de Ação para a
                Qualidade (PAQ) e com a Avaliação in loco e Certificação em
                2022.
              </p>
              <p>O segundo ciclo está em andamento agora em 2023.</p>
            </div>
          </article>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default SectionAbout;
