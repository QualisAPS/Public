/* eslint-disable tailwindcss/no-custom-classname */
export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            href="/"
            aria-current="page"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ml-0 rounded-l-lg border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            Anterior
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-gray-500 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 rounded-r-lg border bg-white px-3 py-2 leading-tight dark:hover:text-white"
          >
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
}
