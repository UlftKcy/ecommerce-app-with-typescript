import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchProductItem, resetSelectedProduct } from '../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

const ProductDetail: FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const product: any = useAppSelector((state) => state.products.selected_product);

    useEffect(() => {
          // Mounting
        dispatch(fetchProductItem(id as string));
        // Cleanup function
        return () => {
            dispatch(resetSelectedProduct());
        };
    }, [id]);

    return (
        <div className='grid md:grid-cols-2 md:grid-rows-1 gap-10 p-10 h-screen'>
            <div className='col-span-1 m-auto'>
                <img className='w-36 h-36 md:w-80 md:h-80 m-auto' src={product.avatar} alt={product.name} />
            </div>
            <div className='col-span-1 flex justify-center flex-col items-center'>
                <div className='flex flex-col mb-10'>
                    <span className='text-4xl font-medium tracking-wide'>{product.name}</span>
                    <span className='bg-indigo-100 text-indigo-700 text-lg font-bold min-w-20 p-3 my-7 mx-auto rounded-lg'>$ {product.price}</span>
                    <div className='max-w-lg whitespace-pre-line'>
                        <span className='text-gray-400 font-medium'>{product.description}</span>
                    </div>
                </div>
                <div>
                    <select name="" id="" className='mr-5 border border-gray-400 outline-none p-3 rounded-lg'>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    <button className='bg-indigo-700 text-white px-10 py-3 rounded-lg'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;