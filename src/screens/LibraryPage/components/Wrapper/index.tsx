import Form from '../Form';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

export default function Wrapper() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <article className="max-w-lg">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-medium text-[#141414]">
              Fale Conosco
            </h3>
            <p className="text-base text-paragraph">
              A Central de Comunicação é um canal pelo qual é posível obter
              informações e sanar dúvidas diversas sobre nossos serviços,
              Unidades e sistemas. Utilize o formulário abaixo para que possamos
              melhor atendê-lo.
            </p>
            <h3 className="text-3xl font-medium text-[#141414]">
              Redes Sociais
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
                    <FaFacebookSquare aria-hidden="true" className="text-3xl" />
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
                    <FaTwitterSquare aria-hidden="true" className="text-3xl" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </article>

        <article style={{ width: '50%' }}>
          <Form />
        </article>
      </div>
    </section>
  );
}
