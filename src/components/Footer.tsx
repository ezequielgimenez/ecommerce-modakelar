import Image from "next/image";

export default function FooterComp() {
  return (
    <div>
      <footer className="bg-[#252525] text-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.svg" width={200} height={43} alt="logo"></Image>
          </div>

          <div className="pt-12">
            <h3 className="text-lg font-montserrat font-semibold mb-2">
              Links
            </h3>
            <ul className="text-sm text-gray-400 space-y-4">
              <li>
                <a
                  className="hover:text-[#2a59fe] transition-all duration-300"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#2a59fe] transition-all duration-300"
                  href="/info-acerca-de"
                >
                  Acerca de
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#2a59fe] transition-all duration-300"
                  href="/contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-12 space-y-4">
            <h3 className="text-lg font-montserrat font-semibold mb-2 ">
              Contacto
            </h3>
            <p className="text-sm text-gray-400">📍 Argentina</p>
            <p className="text-sm text-gray-400">📞 +54 (123) 456-7890</p>
            <p className="text-sm text-gray-400">
              📧 ezequielgimenezdev@gmail.com
            </p>
          </div>

          <div className="pt-12">
            <h3 className="text-lg font-oxanium font-semibold mb-2">
              Siguenos!
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/socials/ig.png" alt="" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/socials/facebook.png" alt="" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src="/socials/twitter.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          © 2025 Modakelar. Desarrollado con ❤️ by ezequielgimenezdev@gmail.com
        </div>
      </footer>
    </div>
  );
}
