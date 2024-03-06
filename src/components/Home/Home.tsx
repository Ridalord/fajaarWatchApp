import AmazingBanner from "./AmazingBanner/AmazingBanner";
import Category from "./Category/Category";
import Hero from "./Hero/Hero";
import ProductsSection from "./ProductsSection/ProductsSection";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import Deal from "./DealOfTheDay/Deal";
import Brands from "./Brands/Brands";
import EmailSignup from "./EmailSignup/EmailSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <ProductsSection />
      <AmazingBanner />
      <TrendingProducts />
      <Deal />
      <Brands />
      <EmailSignup/>
    </>
  );
}
