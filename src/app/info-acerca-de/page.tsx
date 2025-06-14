import Head from "next/head";

export default function AcercaDe() {
  return (
    <div>
      <div className="flex  items-center justify-center py-16">
        <Head>
          <title>Acerca de</title>
          <meta
            name="description"
            content="Descubre más sobre Modakelar, nuestra misión y visión. Ofrecemos una cuidada selección de calzado."
          />
          <meta
            name="keywords"
            content="Modakelar, eCommerce, calzado, zapatillas, zapatos"
          />
          <meta property="og:title" content="Acerca de Modakelar" />
        </Head>

        <div className="flex flex-col w-[500px] text-center items-center justify-center gap-10">
          <h1 className="font-montserrat text-[35px] font-[600] text-[#737373]">
            Acerca de Modakelar
          </h1>
          <h2 className="font-montserrat text-[20px] font-[500] text-black">
            ¿Quiénes Somos?
          </h2>
          <h4 className="font-montserrat text-[16px] font-[600] text-[#737373]">
            Modakelar nació con la pasión de ofrecer una experiencia de compra
            única en calzado y moda. Nos especializamos en la venta de
            zapatillas, zapatos, botitas e indumentaria de alta calidad,
            seleccionando cuidadosamente cada uno de nuestros productos para que
            nuestros clientes disfruten tanto de la comodidad como del estilo.
          </h4>

          <h2 className="font-montserrat text-[20px] font-[500] text-black">
            Nuestra Misión
          </h2>
          <h4 className="font-montserrat text-[16px] font-[600] text-[#737373]">
            En Modakelar, nuestro objetivo es ofrecer una experiencia de compra
            única y accesible para quienes buscan calzado de calidad.
          </h4>
          <h2 className="font-montserrat text-[20px] font-[500] text-black">
            Sobre Nuestros Productos
          </h2>
          <h4 className="font-montserrat text-[16px] font-[600] text-[#737373]">
            En Modakelar, ofrecemos una cuidada selección de zapatillas, zapatos
            y botas e indumentaria que combinan estilo y confort, ideales para
            cualquier ocasión.
          </h4>
        </div>
      </div>
    </div>
  );
}
