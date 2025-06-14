import Head from "next/head";

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <meta
          name="description"
          content="Ponte en contacto con nosotros para consultas, soporte o más información sobre nuestros productos y servicios."
        />
        <meta
          name="keywords"
          content="contacto, soporte, consultas, atención al cliente"
        />
        <meta name="author" content="Modakelar" />
        <meta property="og:title" content="Contacto - Modakelar" />
        <meta
          property="og:description"
          content="Ponte en contacto con nosotros para consultas, soporte o más información sobre nuestros productos y servicios."
        />
      </Head>
      <div className="flex flex-col items-center justify-center pt-24">
        <div className="space-y-8">
          <h1 className="font-montserrat text-[35px] font-[600] text-[#737373]">
            Contacto
          </h1>
          <h2 className="font-montserrat text-[20px] font-[500] text-black">
            Teléfono
          </h2>
          <h4 className="font-montserrat text-[16px] font-[600] text-[#737373]">
            123456781
          </h4>
          <h2 className="font-montserrat text-[20px] font-[500] text-black">
            Email
          </h2>
          <h4 className="font-montserrat text-[16px] font-[600] text-[#737373]">
            modakelar@email.com
          </h4>
          <h2 className="font-montserrat text-[20px] font-[500] text-black">
            Seguinos
          </h2>
          <div className="flex justify-start gap-x-8 pb-24">
            <a href="http://www.facebook.com">
              <img src="/socials/facebook.png" alt="" />
            </a>
            <a href="http://www.twitter.com">
              <img src="/socials/twitter.png" alt="" />
            </a>
            <a href="http://www.instagram.com">
              <img src="/socials/ig.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
