import React from 'react'
import { form_elements } from '../constants/form';

const CreateProduct = () => {
    return (
        <div className='container mx-auto w-1/2 my-10 h-screen'>
            <div className='bg-gray-300 py-2 rounded-tl-md rounded-tr-md font-bold'>Create Product</div>
            <div className='border p-5'>
                <form>
                    {React.Children.toArray(form_elements.map((element) => (
                        <>
                            <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                                <label htmlFor={element.htmlFor} className='text-sm text-zinc-500 col-span-1 text-left'>{element.label} :</label>
                                <input type={element.type} name={element.name} id={element.id} className='col-span-2 p-1 rounded border outline-0' />
                            </div>
                        </>
                    )))}
                    <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;