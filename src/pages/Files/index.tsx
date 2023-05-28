const files = [
  {
    id: 1,
    name: 'MANUAL Instrutivo QUALISAPS 2023',
    description: 'Descrição do documento',
    href: 'https://qualisaps.unb.br/files/Manual_instrutivo_Qualis_2023.pdf',
    imageSrc:
      'https://images.unsplash.com/photo-1598882976119-2fe45a932dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  {
    id: 2,
    name: 'GABARITO eSF e eSB 2º ciclo',
    description: 'Descrição do documento',
    href: 'https://qualisaps.unb.br/files/Manual_instrutivo_Qualis_2023.pdf',
    imageSrc:
      'https://images.unsplash.com/photo-1598882976119-2fe45a932dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  }
];

export default function Files() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          Documentos disponíveis
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <div key={file.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    src={file.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {file.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {file.description}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={file.href}
                  className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Download<span className="sr-only">, {file.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
