import React, { useEffect } from 'react';
import { fetchProducts } from '../features/products/productSlice';
import { Categories } from '../types';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import Product from './Product';

const Products = () => {
  const dispatch = useAppDispatch();
  const selected_category: any = useAppSelector((state) => state.categories.selected_category);
  const products: any[] = useAppSelector((state) => {
    const getAllproducts = state.products.products;
    if (selected_category === "") {
      return getAllproducts;
    } else {
      const filteredProducts = getAllproducts.filter((product: any) => product.category === selected_category.name);
      return filteredProducts;
    }
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-10'>
      {
        React.Children.toArray(products.map((product: any) => (
          <Product {...product} />
        )))
      }
    </div>
  )
}

export default Products;