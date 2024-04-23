import { useRouteError } from "react-router-dom";
import Header from "../components/header/Header";
import Logo from "../components/logo/LogoApp";
import ErrorComponent from "../components/error/ErrorComponent";
import { ApiErrorResponse, ErrorType, RouteError } from "../types/ResponseTypes";
import { useEffect } from "react";


interface PageErrorProps {
    api_errors?: ErrorType;
}

const ErrorPage:React.FC<PageErrorProps> = ({ api_errors }) => {
    const route_error = useRouteError() as ErrorType;
    
    useEffect(() => {
        console.error(route_error);
    }, [route_error]);

    return (
        <ErrorComponent error={api_errors || route_error}/>
    );
}

export default ErrorPage;