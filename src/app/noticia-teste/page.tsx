import Image from 'next/image';
import SharePost from '@/components/SharePost';

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Noticia teste - Qualis`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={'/images/blog/blog-01.png'}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                  Qualis APS: Nova etapa da avaliação da Atenção Primária
                </h2>

                <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{' '}
                    Teste
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Publicado em: 13 de Setembro, 2023
                    </span>{' '}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Categoria:
                    </span>
                    QualisAPS
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    O programa de Qualificação da Atenção Primária à Saúde
                    (Qualis APS) iniciou uma nova fase na avaliação da Atenção
                    Primária à Saúde do Distrito Federal. Após realizar um
                    diagnóstico da estrutura das Unidades Básicas de Saúde, a
                    autoavaliação e a elaboração e desenvolvimento dos planos de
                    ação para a qualidade (PAQ) das equipes de saúde da família
                    e da gestão, o Programa se prepara para começar uma
                    avaliação in loco. A ação pretende levantar informações
                    relevantes junto aos gestores, profissionais e usuários das
                    Regiões de Saúde do DF, de modo a aprimorar a prestação e a
                    gestão dos serviços de saúde da APS.
                  </p>

                  <p>
                    A nova etapa já começa com uma novidade: os entrevistadores
                    vão utilizar um software chamado “Redcap”. A ferramenta
                    online vai garantir a consistência, o armazenamento e a
                    organização dos dados coletados.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={'/images/blog/blog-01.png'}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={'/images/blog/blog-02.png'}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">Avaliação in loco</h3>

                  <p>
                    Para a avaliação, a equipe da Universidade de Brasília
                    (UnB), em parceria com a Secretaria de Saúde do Distrito
                    Federal (SES/DF), elaborou um instrumento com questões que
                    englobam a organização do trabalho das equipes de saúde da
                    família, de saúde bucal e de gestão; o funcionamento dos
                    serviços; a satisfação dos usuários; e a estrutura das
                    Unidades Básicas de Saúde (UBS). A avaliação será feita em
                    todas as UBS do DF (exceto as unidades prisionais) e com
                    todas as equipes que realizaram a autoavaliação.
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
                  Categories
                </h4>

                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">QualisAPS</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Artigos</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Atenção Básica</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300 hover:text-primary">
                    <a href="#">Eventos</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
