import { Suspense } from "react";
import { SearchProductsComp } from "components/SearchProducts";

export default async function SearchProductsPage() {
  return (
    <div>
      <Suspense fallback={<div>Cargando búsqueda...</div>}>
        <SearchProductsComp />
      </Suspense>
    </div>
  );
}
