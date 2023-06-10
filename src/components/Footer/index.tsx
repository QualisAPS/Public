import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-11 bg-green-variant">
      <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <section className="flex items-center justify-center py-2">
            <div className="grid grid-cols-2 items-center gap-3 divide-x text-white lg:grid-cols-2">
              <h3 className="text-xl font-semibold text-[#FFFFFF] md:text-3xl">
                QualisAPS
              </h3>
              <nav aria-label="Redes Sociais" className="pl-4">
                <ul className="flex items-center gap-3">
                  <li>
                    <a
                      href="https://www.facebook.com/programa.qualisaps/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebookSquare
                        aria-hidden="true"
                        className="text-3xl"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/qualis_aps/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram aria-hidden="true" className="text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/qualis_aps"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                    >
                      <FaTwitterSquare
                        aria-hidden="true"
                        className="text-3xl"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          <section className="flex justify-center">
            <div className="grid grid-cols-1 gap-1 divide-x text-center text-white lg:grid-cols-3">
              <article>
                <h4 className="text-lg font-semibold">
                  Universidade de Brasilia
                </h4>
              </article>
              <article className="pl-4">
                <h4 className="text-lg font-semibold">
                  Fundação Oswaldo Cruz (Fiocruz)
                </h4>
              </article>
              <article className="pl-4">
                <h4 className="text-lg font-semibold">
                  Secretaria de Saúde do Distrito Federal
                </h4>
              </article>
            </div>
          </section>
          <hr className="text-slate-400" />
          <section className="mt-3 flex justify-center">
            <article>
              <p className="text-center text-white">
                © 2023, Desenvolvido pela Equipe de TI do{' '}
                <strong>QualisAPS</strong>
              </p>
            </article>
          </section>
        </div>
      </div>
    </footer>
  );
}
