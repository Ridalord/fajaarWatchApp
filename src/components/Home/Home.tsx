import { Title } from 'react-admin';
import AmazingBanner from './AmazingBanner/AmazingBanner';
import Category from './Category/Category';
import Hero from './Hero/Hero';
import ProductsSection from './ProductsSection/ProductsSection';
import TrendingProducts from './TrendingProducts/TrendingProducts';
import Deal from './DealOfTheDay/Deal';
import Brands from './Brands/Brands';
import EmailSignup from './EmailSignup/EmailSignup';
import BlogPosts from './BlogPostSection/BlogPosts';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

export default function Home() {
  const [load] = useState(true);

  return (
    <>
      <Preloader load={load} />
      <Title title="Home Page"/>
      <Hero />
      <Category />
      <ProductsSection />
      <AmazingBanner />
      <TrendingProducts />
      <Deal />
      <BlogPosts />
      <Brands />
      <EmailSignup />
    </>
  );
}
