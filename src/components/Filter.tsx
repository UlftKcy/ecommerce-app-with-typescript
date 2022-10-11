import React, { FC, useEffect } from 'react'
import { getCategory } from '../features/categories/categorySlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
const Filter: FC = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);

    useEffect(()=>{
        dispatch(getCategory())
    },[]);
    return (
        <div className='snap-x'>
            {React.Children.toArray(categories.map((category: any) => (
                <div className='snap-center'>
                    <span>{category.name}</span>
                </div>
            )))}
        </div>
    )
}

export default Filter;