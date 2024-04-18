import { Menu } from '@/types/menu';

const menuData: Menu[] = [
  {
    id: 1,
    title: 'Início',
    newTab: false,
    path: '/'
  },
  {
    id: 2,
    title: 'Quem Somos',
    newTab: false,
    path: '/sobre'
  },
  {
    id: 5,
    title: 'Notícias',
    newTab: false,
    path: '/noticias'
  },
  {
    id: 3,
    title: 'Biblioteca',
    newTab: false,
    path: '/biblioteca'
  },
  {
    id: 4,
    title: 'Acessibilidade',
    newTab: false,
    path: '/acessibilidade'
  }
  /*
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  */
];

export default menuData;
