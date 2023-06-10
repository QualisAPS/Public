import Link from 'next/link';
import { IBreadcrumbs } from '@/interfaces/IBreadcrumbs';

export default function Breadcrumbs({ text }: IBreadcrumbs) {
  return (
    <section className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <nav
        className="text-gray-700 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-7 flex max-w-xs rounded-lg border px-5 py-3"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="text-gray-900 dark:text-gray-400 dark:hover:text-green-800 inline-flex items-center text-sm font-medium"
            >
              <svg
                aria-hidden="true"
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Início
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="text-gray-400 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/sobre"
                className="text-gray-900 dark:text-gray-400 ml-1 text-sm font-medium md:ml-2"
              >
                {text}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </section>
  );
}
