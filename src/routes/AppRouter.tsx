import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <h1>Something went wrong!</h1>,
        children: [
            {
            path: 'analytics-dashboard',
            element: <Dashboard/>
            },
        ],
    }
]);


const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
