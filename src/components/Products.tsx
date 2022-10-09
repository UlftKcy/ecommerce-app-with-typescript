import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import { RootState } from '../features/store';
import { useAppDispatch } from '../utils/hooks';

const Products = () => {
  const products =  useSelector((state:RootState)=>state.products);
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[products]);
  return (
    <div>Products</div>
  )
}

export default Products