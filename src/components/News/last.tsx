const posts = [
  {
    title: 'Conhecendo o novo site QualiAPS',
    href: '#',
    category: {
      name: 'Categoria',
      href: '#',
      color: 'bg-green-100 text-green-800'
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Sábado, 13 de Maio',
    datetime: '2020-02-12',
    author: {
      name: 'César Augusto',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80'
    },
    readingTime: '11 min'
  },
  {
    title: 'Conhecendo o Programa Qualis',
    href: '#',
    category: {
      name: 'Categoria',
      href: '#',
      color: 'bg-green-100 text-green-800'
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Sábado, 13 de Maio',
    datetime: '2020-02-12',
    author: {
      name: 'Caroline Guida',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '11 min'
  },
  {
    title: 'Conhecendo o Programa Qualis',
    href: '#',
    category: {
      name: 'Categoria',
      href: '#',
      color: 'bg-green-100 text-green-800'
    },
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Sábado, 13 de Maio',
    datetime: '2020-02-12',
    author: {
      name: 'Caroline Guida',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    readingTime: '11 min'
  }
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function LastNews() {
  return (
    <div className="bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Últimas Notícias
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Talvez um subtitulo da seção?
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={post.author.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} de leitura</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button
          type="submit"
          className="inline-flex  rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          + Notícias
        </button>
      </div>
    </div>
  )
}
