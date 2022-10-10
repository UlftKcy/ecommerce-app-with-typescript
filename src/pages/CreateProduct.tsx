import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import { productSchema } from '../validation';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { createProduct } from '../features/products/productSlice';
import { getCategory } from '../features/categories/categorySlice';

const CreateProduct: React.FC = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state)=>state.categories.categories);
   
    useEffect(()=>{
        dispatch(getCategory())
    },[categories]);

    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            category: "",
            description: "",
            avatar: "",
            developerEmail: "ukacay87@gmail.com"
        },
        onSubmit: values => {
           dispatch(createProduct(values));
        },
        validationSchema: productSchema
    })
    return (
        <div className='container mx-auto w-1/2 my-10 h-screen'>
            <div className='bg-gray-300 py-2 rounded-tl-md rounded-tr-md font-bold'>Create Product</div>
            <div className='border p-5'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                        <label htmlFor="name" className='text-sm text-zinc-500 col-span-1 text-left'>Name :</label>
                        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} className='col-span-2 p-1 rounded border outline-0' />
                        {formik.errors.name && <span>{formik.errors.name}</span>}
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                        <label htmlFor="price" className='text-sm text-zinc-500 col-span-1 text-left'>Price :</label>
                        <input type="number" id="price" name="price" onChange={formik.handleChange} value={formik.values.price} className='col-span-2 p-1 rounded border outline-0' />
                        {formik.errors.price && <span>{formik.errors.price}</span>}
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                        <label htmlFor="category" className='text-sm text-zinc-500 col-span-1 text-left'>Category :</label>
                        <select id="category" name="category" onChange={formik.handleChange} value={formik.values.category} className='col-span-2 p-1 rounded border outline-0'>
                            {React.Children.toArray(categories.map((category:any)=>(
                                <option>{category.name}</option>
                            )))}
                        </select>
                        {formik.errors.category && <span>{formik.errors.category}</span>}
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                        <label htmlFor="description" className='text-sm text-zinc-500 col-span-1 text-left'>Description :</label>
                        <input type="text" id="description" name="description" onChange={formik.handleChange} value={formik.values.description} className='col-span-2 p-1 rounded border outline-0' />
                        {formik.errors.description && <span>{formik.errors.description}</span>}
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                        <label htmlFor="avatar" className='text-sm text-zinc-500 col-span-1 text-left'>Avatar :</label>
                        <input type="text" id="avatar" name="avatar" onChange={formik.handleChange} value={formik.values.avatar} className='col-span-2 p-1 rounded border outline-0' />
                        {formik.errors.avatar && <span>{formik.errors.avatar}</span>}
                    </div>
                    <div className='grid grid-cols-3 grid-rows-1 items-center mb-5'>
                        <label htmlFor="developerEmail" className='text-sm text-zinc-500 col-span-1 text-left'>Developer Email :</label>
                        <input type="text" id="developerEmail" name="developerEmail" onChange={formik.handleChange} value={formik.values.developerEmail} className='col-span-2 p-1 rounded border outline-0' />
                        {formik.errors.developerEmail && <span>{formik.errors.developerEmail}</span>}
                    </div>
                    <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;