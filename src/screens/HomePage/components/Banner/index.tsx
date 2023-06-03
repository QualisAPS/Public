import Image from 'next/image';

export default function Banner() {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <section className="bg-banner">
      <div className="flex max-w-7xl">
        <div className="flex items-center justify-between">
          <article>
            <header className="max-w-xl">
              <h1 className="text-2xl font-bold text-[#141414] sm:text-4xl">
                Programa QUALIS APS Avaliação da Atenção Primária à Saúde do
                Distrito Federal
              </h1>
            </header>
          </article>
          <article className="hidden lg:block">
            <Image src="/static/banner.png" alt="" width={300} height={200} />
          </article>
        </div>
      </div>
    </section>
  );
}
