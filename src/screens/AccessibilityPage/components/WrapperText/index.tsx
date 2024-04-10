'use client';
import React from 'react';
import Link from 'next/link';

const WrapperText = () => {
  return (
    <section id="features" className="pb-20">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <article className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
          <div className="flex flex-col gap-7">
            <p className="dark:text-white">
              Acessibilidade Digital é a{' '}
              <strong className="text-black dark:text-white">
                eliminação de barreiras na Web
              </strong>
              . O conceito pressupõe que os sites e portais sejam projetados de
              modo que todas as pessoas possam perceber, entender, navegar e
              interagir de maneira efetiva com as páginas.
            </p>

            <p className="dark:text-white">
              As páginas do Portal do programa{' '}
              <strong className="text-black dark:text-white">QualisAPS</strong>{' '}
              foram projetadas para serem acessíveis e facilmente utilizáveis.
              Se você tiver sugestões ou encontrar problemas, por favor, entre
              em contato pelo nosso{' '}
              <Link
                href="mailto: suporte.qualis@gmail.com"
                className="font-semibold text-green"
              >
                Email
              </Link>{' '}
              e ajude-nos a melhorar a sua experiência. As instruções a seguir
              podem facilitar a sua navegação.
            </p>
            <div className="flex flex-col gap-4">
              <h3 className="mt-0 text-3xl font-medium text-black dark:text-white xl:text-3xl">
                Teclas de Atalho
              </h3>
              <p className="dark:text-white">
                Utilize as teclas de atalho para ir diretamente a alguns pontos
                do Portal. Os atalhos são acionados pela combinação de duas ou
                mais teclas. As teclas de atalho dependem do sistema operacional
                (Microsoft Windows, Mac OS, Linux, DOS etc.) e do navegador
                (Internet Explorer, Google Chrome, Mozilla Firefox, Safari etc.)
                que você usa. Procure manter-se atualizado quanto à configuração
                do seu computador, caso as recomendações feitas nesta página não
                funcionem.
              </p>
              <p className="dark:text-white">
                {' '}
                As configurações mais comuns são:
              </p>
              <ul className="ml-6 flex list-disc flex-col gap-1">
                <li className="dark:text-white">
                  a tecla{' '}
                  <strong className="text-black dark:text-white">ALT</strong>{' '}
                  para os navegadores Internet Explorer, Google Chrome e Safari
                  em um computador Microsoft Windows.
                </li>
                <li className="dark:text-white">
                  As teclas{' '}
                  <strong className="text-black dark:text-white">SHIFT</strong>{' '}
                  e <strong className="text-black dark:text-white">ALT</strong>,
                  simultaneamente, para o navegador Mozilla Firefox em um
                  computador Microsoft Windows ou Linux
                </li>
                <li className="dark:text-white">
                  A tecla{' '}
                  <strong className="text-black dark:text-white">
                    COMMAND
                  </strong>{' '}
                  para o sistema operacional Mac OS
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mt-0 text-3xl font-medium text-black dark:text-white xl:text-3xl">
                Tamanho do texto
              </h3>
              <p className="dark:text-white">
                Nos navegadores mais modernos, geralmente existe uma ferramenta
                de zoom (ampliação ou redução), que é um método mais eficaz,
                rápido e agradável de obter textos e imagens no tamanho
                desejado.
              </p>
              <p className="dark:text-white">
                {' '}
                Para usar o zoom no Microsoft Windows ou no Linux:
              </p>
              <ul className="ml-6 flex list-disc flex-col gap-1">
                <li className="dark:text-white">
                  pressione a tecla{' '}
                  <strong className="text-black dark:text-white">CTRL</strong> e
                  digite a tecla{' '}
                  <strong className="text-black dark:text-white">
                    + (mais)
                  </strong>{' '}
                  para aumentar
                </li>
                <li className="dark:text-white">
                  pressione a tecla{' '}
                  <strong className="text-black dark:text-white">CTRL</strong> e
                  digite a tecla{' '}
                  <strong className="text-black dark:text-white">
                    - (menos)
                  </strong>{' '}
                  para diminuir
                </li>
                <li className="dark:text-white">
                  pressione a tecla{' '}
                  <strong className="text-black dark:text-white">CTRL</strong> e
                  digite a tecla{' '}
                  <strong className="text-black dark:text-white">
                    0 (zero)
                  </strong>{' '}
                  para restaurar o tamanho original da página
                </li>
              </ul>
              <p className="dark:text-white"> Para usar o zoom no Mac OS:</p>
              <ul className="ml-6 flex list-disc flex-col gap-1">
                <li className="dark:text-white">
                  pressione a tecla{' '}
                  <strong className="text-black dark:text-white">
                    COMMAND
                  </strong>{' '}
                  e digite a tecla{' '}
                  <strong className="text-black dark:text-white">
                    + (mais)
                  </strong>{' '}
                  para aumentar
                </li>
                <li className="dark:text-white">
                  pressione a tecla{' '}
                  <strong className="text-black dark:text-white">
                    COMMAND
                  </strong>{' '}
                  e digite a tecla{' '}
                  <strong className="text-black dark:text-white">
                    - (menos)
                  </strong>{' '}
                  para diminuir
                </li>
                <li className="dark:text-white">
                  pressione a tecla{' '}
                  <strong className="text-black dark:text-white">
                    COMMAND
                  </strong>{' '}
                  e digite a tecla{' '}
                  <strong className="text-black dark:text-white">
                    0 (zero)
                  </strong>{' '}
                  para restaurar o tamanho original da página
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="mt-0 text-3xl font-medium text-black dark:text-white xl:text-3xl">
                Leitores de Tela
              </h3>
              <p className="dark:text-white">
                Os leitores de tela são programas de computador projetados para
                serem utilizados por pessoas com deficiência visual. Eles
                capturam a informação apresentada na tela e a transformam em uma
                resposta falada (áudio) utilizando um sintetizador de voz. A
                navegação é feita com um teclado comum, na maioria das vezes sem
                a necessidade de mouse ou de monitor. O áudio é emitido por meio
                da placa de som do computador. Podem ser de uso público
                (gratuitos) ou comercializados (pagos). A seguir, listamos
                alguns desses leitores de tela.
              </p>
              <ul className="ml-6 flex list-disc flex-col gap-1">
                <li className="dark:text-white">
                  <strong className="text-black dark:text-white">DOSVOX</strong>
                </li>
                <li className="dark:text-white">
                  <strong className="text-black dark:text-white">NVDA</strong>
                </li>
                <li className="dark:text-white">
                  <strong className="text-black dark:text-white">ORCA</strong>
                </li>
                <li className="dark:text-white">
                  <strong className="text-black dark:text-white">
                    VoiceOver
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WrapperText;
