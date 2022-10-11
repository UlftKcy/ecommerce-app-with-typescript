import React, { useEffect } from 'react';
import { fetchProducts } from '../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import Product from './Product';

const Products = () => {
  const products =  useAppSelector((state)=>state.products.products);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchProducts());
  },[]);

  return (
    <div className='container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-10'>
    {
      React.Children.toArray(products.map((product:any)=>(
        <Product {...product}/>
      )))
    }
    </div>
  )
}

export default Products;