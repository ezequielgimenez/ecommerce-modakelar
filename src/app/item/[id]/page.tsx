import ItemComp from "components/Item";

type Props = {
  params: {
    id: string;
  };
};

export default async function ItemProductPage({ params }: Props) {
  const id = params.id;

  const res = await fetch(`http://localhost:3000/api/product/${id}`);
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
