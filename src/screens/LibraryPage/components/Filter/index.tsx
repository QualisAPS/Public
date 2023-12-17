'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    
    if (term) {
      params.set('ano', term);
    } else {
      params.delete('ano');
    }
    replace(`${pathname}?${params.toString()}`);
  });

  return (
    <div className="flex flex-col gap-1">
      <label className="text-zinc-800 dark:text-white">Filtrar por Ano</label>
      <div className="relative mt-1">
        <select
          className="appearance-none relative w-full cursor-default rounded-lg bg-white dark:bg-black py-4 pl-3 pr-10 text-left border border-stroke dark:border-gray-600 shadow-solid-12 dark:shadow-none focus:outline-none focus-visible:border-indigo-500 dark:focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 dark:focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:focus-visible:ring-offset-orange-300 sm:text-sm"
          defaultValue={searchParams.get('ano')?.toString()}
          onChange={(e) => handleSearch(parseInt(e.target.value, 0))}
        >
          <option value="0">Todos</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <svg
            className="fill-current h-4 w-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
