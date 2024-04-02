'use client';
import React from 'react';
import Image from 'next/image';

const Supporters = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-6">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex gap-12 justify-center items-center">
            <a
              href="https://www.unb.br/"
              className="animate_top block relative h-20 mx-w-full w-[120px]"
            >
              <Image
                className="opacity-65 transition-all duration-300 hover:opacity-100 image"
                src="/images/apoiadores/unb.jpg"
                alt="Logo da Unb"
                fill
              />
            </a>
            <a
              href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/sus"
              className="animate_top block relative h-20 mx-w-full w-[120px]"
            >
              <Image
                className="opacity-65 transition-all duration-300 hover:opacity-100 image"
                src="/images/apoiadores/sus.png"
                alt="Logo do sus"
                fill
              />
            </a>
            <a
              href="https://portal.fiocruz.br/"
              className="animate_top block relative h-20 mx-w-full w-[120px]"
            >
              <Image
                className="opacity-65 transition-all duration-300 hover:opacity-100 image"
                src="/images/apoiadores/fiocruz.png"
                alt="Logo da Fiocruz"
                fill
              />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Supporters;
