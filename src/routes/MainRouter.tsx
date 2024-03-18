import React from 'react';
import PageResetPass from "../pages/PageResetPass";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from '../pages/PageError';
import { NewPasswordProvider } from '../providers/NewPasswordContext';
import { QueryProvider } from '../providers/QueryContext';
import { HandleErrorProvider } from '../providers/HandleErrorContext';

const router = createBrowserRouter(
    [
        {
            path: "/reset-password",
            element: <PageResetPass />,
            errorElement: <ErrorPage />
        }
    ]
)

const MainRouter: React.FC = () => {
    return (
        <>
            <HandleErrorProvider>
                <QueryProvider>
                    <NewPasswordProvider>
                        <RouterProvider router={router} />
                    </NewPasswordProvider>
                </QueryProvider>
            </HandleErrorProvider>
        </>
    )
}

export default MainRouter;