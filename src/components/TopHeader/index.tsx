import { Link } from 'react-router-dom';

/* import icons */
import { MdFacebook } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

export default function TopHeader() {
  return (
    <div className="bg-teal-800">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-4 py-2 sm:px-6 lg:px-8">
        <nav aria-label="Redes Sociais">
          <ul className="flex gap-3">
            <li>
              <a
                href="https://www.facebook.com/programa.qualisaps/"
                className="bg-white"
                target="_blank"
                rel="noreferrer"
              >
                <MdFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/qualis_aps/"
                className="bg-white"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/qualis_aps"
                className="bg-white"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </nav>
        <Link to="/acessibilidade" className="text-white">
          Acessibilidade
        </Link>
      </div>
    </div>
  );
}
