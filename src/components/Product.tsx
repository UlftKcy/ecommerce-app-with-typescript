import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchProductItem } from '../features/products/productSlice'
import { InputName } from '../types'
import { useAppDispatch } from '../utils/hooks'
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {FaTrash} from "react-icons/fa";

const Product: FC<InputName> = ({ _id, name, price, avatar }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const showDetailPage = (event: React.MouseEvent<HTMLButtonElement>): void => {
        dispatch(fetchProductItem(_id as string));
        navigate("/product/" + `${_id}`);
    };
    return (
        <div className='col-span-1 place-content-center ring-offset-2 ring-1 ring-gray-300 bg-gray-100 font-mono rounded-lg drop-shadow-xl hover:-translate-y-1 hover:scale-105 hover:bg-indigo-100 duration-300'>
            <div className='flex items-start p-3'>
                <button><FaTrash color="gray"/></button>
                <img className='w-24 h-24 mx-auto object-contain' src={avatar} alt={name} />
                <button><MdOutlineFavoriteBorder size={20}/></button>
            </div>
            <div className='flex place-content-center flex-col p-3 rounded-b-lg'>
                <span className='text-lg font-bold text-gray-700 truncate mb-3'>{name}</span>
                <span className='font-bold text-indigo-700 mb-3'>${price}</span>
                <button onClick={showDetailPage} className='px-5 border border-gray-400 hover:bg-indigo-700 hover:text-white font-bold rounded-md'>View</button>
            </div>
        </div>
    )
}

export default Product