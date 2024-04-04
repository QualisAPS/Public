'use client';

import SectionLibrary from '../SectionLibrary';
import Filter from '../Filter';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function WrapperCards({
  titulo,
  ano
}: {
  titulo: string;
  ano: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('titulo', term);
    } else {
      params.delete('titulo');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <>
      <title>{`Biblioteca Digital - QualisAPS`}</title>
      <section className="pb-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-9 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <div className="flex flex-col gap-1">
                  <label
                    className="text-zinc-800 dark:text-white"
                    htmlFor="titulo"
                  >
                    Filtrar pelo título
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    placeholder="Pesquisar..."
                    className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('titulo')?.toString()}
                    autoComplete="off"
                  />
                </div>
                <div className="mt-4">
                  <Filter />
                </div>
              </div>
            </div>
            <div className="lg:w-3/3">
              <SectionLibrary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
