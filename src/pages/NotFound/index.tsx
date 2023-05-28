export default function NotFound() {
  return (
    <>
      <main
        className="min-h-full bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1598882949753-4d2a8b61ebbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80")'
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-24 lg:px-8 lg:py-48">
          <p className="text-base font-semibold text-black text-opacity-50">
            404
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Uh oh! Aparentemente você está perdido.
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            A página que você está procurando não existe.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex items-center rounded-md border border-transparent bg-white bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
            >
              Voltar para o início
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
