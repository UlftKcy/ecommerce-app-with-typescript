import React, { FC, useEffect } from 'react'
import { fetchCategories, fetchCategory, resetFilteredCategory } from '../features/categories/categorySlice';
import { fetchProducts } from '../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
const Filter: FC = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);

    const filterByCategory = (id: string): void=>{
        dispatch(fetchCategory(id))
    };

    useEffect(()=>{
        dispatch(fetchCategories())
    },[categories]);

    return (
        <div className='flex justify-around items-center flex-wrap bg-gray-600 text-white p-3'>
            <button onClick={()=>dispatch(resetFilteredCategory())} className='cursor-pointer mx-2 font-semibold hover:text-yellow-400'>
                    All Products
                </button>
            {React.Children.toArray(categories.map((category: any) => (
                <button onClick={()=>filterByCategory(category._id)} className='cursor-pointer mx-2 font-semibold hover:text-yellow-400'>
                    {category.name}
                </button>
            )))}
        </div>
    )
}

export default Filter;