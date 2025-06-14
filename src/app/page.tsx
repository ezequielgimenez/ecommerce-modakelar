import HeroComp from "../components/Hero";
import CategoryComp from "../components/Category";
import { ProductsDestComp } from "../components/ProductsDest";
import HeroMobileComp from "components/Heromobile";

export default function Home() {
  return (
    <div>
      <HeroComp />
      <HeroMobileComp />
      <ProductsDestComp />
      <CategoryComp />
    </div>
  );
}
