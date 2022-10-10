import { FC } from 'react'
import { InputName } from '../types'

const Product: FC<InputName> = ({ name, price, avatar }) => {
    return (
        <div className='relative group col-span-1 h-64 place-content-center ring-offset-2 ring-1 ring-gray-300 bg-gray-100 font-mono rounded-lg drop-shadow-xl'>
           <div className='h-full group-hover:opacity-50'>
           <img className='h-3/5 w-full object-contain' src={avatar} alt={name} />
            <div className='h-2/5 flex place-content-center flex-col p-3 rounded-b-lg'>
                <span className='text-lg font-bold text-gray-700 truncate'>{name}</span>
                <span className='font-bold text-gray-400'>{price} $</span>
            </div>
           </div>
            <div className='absolute z-10 inset-y-1/2 w-full h-0 flex justify-center items-center group-hover:opacity-100 opacity-0'>
                <button className='bg-blue-300 text-blue-600 ring ring-blue-400 font-bold py-1 px-6 rounded-md'>Show Detail</button>
            </div>
        </div>
    )
}

export default Product