import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header() {
  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Programa QUALIS APS Avaliação da Atenção Primária à Saúde do
            Distrito Federal
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            Talvez alguma descrição? Talvez um fundo aqui? Não sei, lets see.
          </p>
        </div>
        <div className="mt-10 w-full max-w-xs">
          <div className="relative mt-1.5"></div>
        </div>
      </div>
    </div>
  )
}
