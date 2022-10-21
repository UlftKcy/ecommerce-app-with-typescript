import React, { FC } from 'react'
import EmptyFavorite from '../components/EmptyFavorite';
import FavoriteProduct from '../components/FavoriteProduct';
import { useAppSelector } from '../utils/hooks';

const Favorites: FC = () => {
    const favorite_products = useAppSelector(state => state.products.favorite_products);
    console.log(favorite_products)
    return (
        <>
            {
                !favorite_products.length ?
                    <EmptyFavorite /> :
                    <div className='container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-10'>
                        {
                            React.Children.toArray(favorite_products.map((product: any) => (
                                <FavoriteProduct {...product} />
                            )))
                        }
                    </div>
            }
        </>
    )
}

export default Favorites;