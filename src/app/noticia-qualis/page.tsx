import Image from 'next/image';
import SharePost from '@/components/SharePost';

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Nova etapa da avaliação da Atenção Primária`}</title>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={'/assets/images/blog/news.jpg'}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Qualis APS: Nova etapa da avaliação da Atenção Primária
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Autor: </span>{' '}
                    Equipe Qualis
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Publicado em: 13 de Dezembro, 2023
                    </span>{' '}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Categoria:{' '}
                    </span>
                    Artigos
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    O programa de Qualificação da Atenção Primária à Saúde
                    (Qualis-APS) iniciou uma nova fase na avaliação da Atenção
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
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categorias
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">QualisAPS</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Artigos</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">Atenção Básica</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
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
