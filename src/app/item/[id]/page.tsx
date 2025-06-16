import ItemComp from "components/Item";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default async function ItemProductPage({ params }: any) {
  const id = params.id;

  const res = await fetch(`${baseUrl}/api/product/${id}`);
  const results = await res.json();
  const itemProduct = results.data;
  return (
    <div>
      <ItemComp
        id={itemProduct.objectID}
        key={itemProduct.index}
        name={itemProduct.name}
        marca={itemProduct.marca}
        description={itemProduct.description}
        image={itemProduct.image}
        price={itemProduct.price}
      ></ItemComp>
    </div>
  );
}
