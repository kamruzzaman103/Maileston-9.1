import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Main = () => {
    return (
        <div className='max-w-5xl m-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;