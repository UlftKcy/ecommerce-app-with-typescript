import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import { RootState } from '../features/store';
import { InputName } from '../types';
import { useAppDispatch } from '../utils/hooks';
import Product from './Product';

const Products = () => {
  const products =  useSelector((state:RootState)=>state.products.products);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[]);

  return (
    <div className='container m-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-10'>
    {
      React.Children.toArray(products.map((product:any)=>(
        <Product {...product}/>
      )))
    }
    </div>
  )
}

export default Products;