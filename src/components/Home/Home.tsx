import AmazingBanner from "./AmazingBanner/AmazingBanner";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import ProductsSection from "./ProductsSection/ProductsSection";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import Deal from "./DealOfTheDay/Deal";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <ProductsSection />
      <AmazingBanner />
      <TrendingProducts />
      <Deal />
    </>
  );
}
