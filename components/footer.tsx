import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Perfil Nerd</h3>
            <p>Seu portal para o universo geek</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 underline">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d7263d] transition-colors"
                >
                  Filmes e Séries
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d7263d] transition-colors"
                >
                  Otaku
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d7263d] transition-colors"
                >
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d7263d] transition-colors"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#d7263d] transition-colors"
                >
                  Variedades
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-xl font-bold mb-4 underline">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#d7263d] transition-colors">
                <LuInstagram size={24} />
              </a>
              <a href="#" className="hover:text-[#d7263d] transition-colors">
                <LuInstagram size={24} />
              </a>
              <a href="#" className="hover:text-[#d7263d] transition-colors">
                <LuInstagram size={24} />
              </a>
            </div>
          </div> */}
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy;
            {`${currentYear} Perfil Nerd. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
