import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addToFavorites, deleteProduct, fetchProductItem } from '../features/products/productSlice'
import { InputName } from '../types'
import { useAppDispatch } from '../utils/hooks';

const Product: FC<InputName> = (product) => {
    const {_id, name, price, avatar} = product;
    const [isFavorite,setIsFavorite] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const showDetailPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
        dispatch(fetchProductItem(_id as string));
        navigate("/product/" + `${_id}`);
    };

    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void =>{
        dispatch(deleteProduct(product));
    };

    const addFavorite = (event: React.MouseEvent<HTMLButtonElement>): void =>{
        dispatch(addToFavorites(product));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className='col-span-1 place-content-center ring-offset-2 ring-1 ring-gray-300 bg-gray-100 font-mono rounded-lg drop-shadow-xl'>
            <div className='flex items-start p-3'>
                <button onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 hover:stroke-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                </button>
                <img className='w-24 h-24 mx-auto object-contain' src={avatar} alt={name} />
                <button onClick={addFavorite}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isFavorite ? 'w-6 h-6 fill-indigo-600 stroke-indigo-600' : 'w-6 h-6 hover:fill-indigo-600 hover:stroke-indigo-600'}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </button>
            </div>
            <div className='flex place-content-center flex-col p-3 rounded-b-lg'>
                <span className='text-lg font-bold text-gray-700 truncate mb-3'>{name}</span>
                <span className='font-bold text-indigo-700 mb-3'>${price}</span>
                <button onClick={showDetailPage} className='px-5 hover:bg-indigo-700 hover:text-white bg-white border border-indigo-700 text-indigo-700 font-bold rounded-md'>View</button>
            </div>
        </div>
    )
}

export default Product