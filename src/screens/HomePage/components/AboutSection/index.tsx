import Link from 'next/link';
import { MdHistoryEdu } from 'react-icons/md';

export default function AboutSection() {
  return (
    <section className="mx-auto mt-11 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <header className="flex items-center gap-4 rounded-2xl bg-yellow p-2">
        <MdHistoryEdu className="text-5xl" />
        <h2 className="text-2xl font-medium text-[#141414] md:text-4xl">
          Quem Somos
        </h2>
      </header>
      <article className="mt-7 bg-white p-6 shadow-lg">
        <div className="flex flex-col gap-4">
          <p className="text-lg text-paragraph">
            O QualisAPS é o Programa de Qualificação da Atenção Primária à Saúde
            do Distrito Federal. Criado pela Portaria nº 39, de 23 de janeiro de
            2019, tem por objetivo o fortalecimento da Atenção Primária à Saúde
            (APS) no Distrito Federal (DF), visando a melhoria dos serviços
            prestados.
          </p>

          <p className="text-lg text-paragraph">
            O Programa é fruto de uma parceria entre a Secretaria de Estado da
            Saúde do Distrito Federal (SES-DF), Fundação Oswaldo Cruz
            (Fiocruz-Brasília) e Universidade de Brasília (UnB). O QualisAPS tem
            uma proposta inovadora ao desenvolver suas ações de forma
            participativa onde as experiências e o conhecimento dos
            trabalhadores, gestores e representantes dos usuários do Sistema
            Único de Saúde/DF são consideradas.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            href="/sobre"
            className="mt-2 rounded-xl bg-button p-3 text-lg font-medium text-white"
            aria-labelledby="about"
          >
            Saiba Mais
          </Link>
          <p id="about" className="sr-only">
            Conheça Mais sobre o QualisAPS
          </p>
        </div>
      </article>
    </section>
  );
}
