"use client";
import { Card } from "ui/cards/cards";
import { useSearchProducts } from "lib/hooks-calls";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MyButton } from "ui/buttons/buttons";
import PageList from "ui/page-list/page-list";

export function SearchProductsComp() {
  const [offset, setOffset] = useState(0);
  const params = useSearchParams();
  const query = params.get("query");
  const { data: products, error } = useSearchProducts(query, 10, offset);
  const currentPage = Math.floor(offset / 10) + 1;

  if (error)
    return (
      <div className="flex flex-col items-center justify-center  min-h-[600px]">
        Error al cargar productos
      </div>
    );

  if (!products)
    return (
      <div className="flex flex-col items-center justify-center min-h-[600px]">
        Cargando...
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <p className="text-lg py-8 font-[500]">Resultados de "{query}" :</p>
      <div className="flex flex-wrap gap-12 items-center justify-center min-h-[600px]">
        {products?.data?.length > 0 ? (
          products?.data?.map((item) => (
            <Card
              key={item.index}
              name={item.name}
              image={item.image}
              marca={item.marca}
              price={item.price}
              id={item.objectID}
            />
          ))
        ) : (
          <h2 className="text-lg font-[500] text-[#252b42]">
            No se encontraron productos
          </h2>
        )}
      </div>
      <div className="flex items-center py-24">
        {products?.nPages > 1 &&
          Array.from({ length: products.nPages }, (_, i) => i + 1).map(
            (page) => (
              <div key={page} onClick={() => setOffset((page - 1) * 10)}>
                <PageList>
                  {page === currentPage ? (
                    <p className="text-[#2596be]">{page}</p>
                  ) : (
                    page
                  )}
                </PageList>
              </div>
            )
          )}

        {products?.nPages > 1 && currentPage !== products.nPages ? (
          <MyButton onClick={() => setOffset((offset + 1) * 10)}>
            Siguiente ➜
          </MyButton>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
