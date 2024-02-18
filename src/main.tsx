import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css'
import { ProductsProvider } from './components/context/ProductsProvider.tsx';
import { WishlistProvider } from './components/context/WishlistProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </ProductsProvider>
  </React.StrictMode>,
)
