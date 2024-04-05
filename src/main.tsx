import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css'
import { ProductsProvider } from './components/context/ProductsProvider.tsx';
import { WishlistProvider } from './components/context/WishlistProvider.tsx';
import { CartProvider } from './components/context/CartProvider.tsx';
import { BlogPostsProvider } from './components/context/BlogProvider.tsx';
import {  MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
    <ProductsProvider>
      <WishlistProvider>
        <CartProvider>
          <BlogPostsProvider>
            <App />
          </BlogPostsProvider>
        </CartProvider>
      </WishlistProvider>
      </ProductsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
