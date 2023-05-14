import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import GenerateReports from '../pages/Reports';
import TransactionQuery from '../pages/TransactionQuery';
import TransactionReconciliation from '../pages/TransactionReconciliation';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <h1>Something went wrong!</h1>,
    },
    {
        path: 'analytics-dashboard',
        element: <Dashboard />
    },
    {
        path: 'reports',
        element: <GenerateReports />
    },
    {
        path: 'transaction-query',
        element: <TransactionQuery />
    },
    {
        path: 'reconciliation',
        element: <TransactionReconciliation />
    }


]);


const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;