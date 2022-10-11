import React, { FC } from 'react'
import Filter from '../components/Filter';
import Products from '../components/Products'

const Home: FC = () => {
    return (
        <>
            <Filter />
            <Products />
        </>
    )
}

export default Home;