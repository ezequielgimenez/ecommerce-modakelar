import { Card } from "ui/cards/cards";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function ProductsDestComp() {
  const resp = await fetch(`${baseUrl}/api/product/sync`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      destacados: true,
    }),
  });
  const products = await resp.json();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h3 className="font-montserrat font-[500] xs:text-[25px] md:text-[30px] py-12">
          Productos destacados
        </h3>
      </div>
      <div className="flex flex-wrap gap-12 items-center justify-center min-h-[600px] xs:px-4">
        {products?.destacados.map((item) => (
          <Card
            key={item.index}
            name={item.name}
            image={item.image}
            marca={item.marca}
            price={item.price}
            id={item.objectID}
          />
        ))}
      </div>
    </div>
  );
}
