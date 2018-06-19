import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


const routes = [
    {
        path: '/',
        exact: true,
        main : () => <HomePage />
    },
    {
        path: '/ProductList',
        exact: true,
        main : () => <HomePage />
    },
    {
        path: '',
        exact: false,
        main : () => <NotFoundPage />
    }
];

export default routes;