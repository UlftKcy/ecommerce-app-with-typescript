import { useSelector } from 'react-redux';
import { RootState } from '../features/store';

const Products = () => {
  const products =  useSelector((state:RootState)=>state.products)
  console.log(products)
  return (
    <div>Products</div>
  )
}

export default Products