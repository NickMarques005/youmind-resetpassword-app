import React from 'react';
import PageResetPass from "../pages/PageResetPass";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from '../pages/PageError';

const router = createBrowserRouter(
    [
        {
            path: "/reset-password",
            element: <PageResetPass />,
            errorElement: <ErrorPage/>
        }
    ]
)

const MainRouter: React.FC = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default MainRouter;